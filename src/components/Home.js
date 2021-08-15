import React, { useState } from "react";
import { Header } from "./Header";
import { auth, db } from "../config/Config";
import { Weights } from "./Weights";

export const Home = ({ currentUser, weights1 }) => {
  const [weight, setWeight] = useState("");
  const [weightError, setWeightError] = useState("");

  const handleWeightSubmit = (e) => {
    e.preventDefault();
    auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection("weights of" + user.uid)
          .add({
            Weight: weight
          })
          .then(setWeight(""))
          .catch((err) => setWeightError(err.message));
      } else {
        console.log("user is not signed in to add weights to database");
      }
    });
  };

  return (
    <div className="wrapper">
      <Header currentUser={currentUser} />
      <br></br>
      <br></br>
      <div className="container">
        <form
          autoComplete="off"
          className="form-group"
          onSubmit={handleWeightSubmit}
        >
          {/*Conditional rendering*/}
          {currentUser && (
            <>
              <input
                type="text"
                placeholder="Enter Weight"
                className="form-control"
                required
                onChange={(e) => setWeight(e.target.value)}
                value={weight}
              />
              <br></br>
              <div
                style={{
                  width: 100 + "%",
                  display: "flex",
                  justifyContent: "flex-end"
                }}
              >
                <button
                  type="submit"
                  className="btn btn-success"
                  style={{ width: 100 + "%" }}
                >
                  ADD
                </button>
              </div>
            </>
          )}

          {!currentUser && (
            <>
              <input
                type="text"
                placeholder="Enter Weight"
                className="form-control"
                required
                disabled
              />
              <br></br>
              <div
                style={{
                  width: 100 + "%",
                  display: "flex",
                  justifyContent: "flex-end"
                }}
              >
                <button
                  type="submit"
                  className="btn btn-success"
                  disabled
                  style={{ width: 100 + "%" }}
                >
                  ADD
                </button>
              </div>
              <div className="error-msg">
                Please register your account or login to use application
              </div>
            </>
          )}
        </form>
        {weightError && <div className="error-msg">{weightError}</div>}

        <Weights weights1={weights1} />
      </div>
    </div>
  );
};
