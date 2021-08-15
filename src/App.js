import React, { Component } from "react";
import "./styles.css";
import { Home } from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Signup } from "./components/SignUp";
import { Login } from "./components/LogIn";
import { auth, db } from "./config/Config";

export class App extends Component {
  state = {
    currentUser: null,
    weights1: []
  };

  componentDidMount() {
    /*getting current user*/
    auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection("users")
          .doc(user.uid)
          .get()
          .then((snapshot) => {
            this.setState({
              currentUser: snapshot.data().fullName
            });
          });
      } else {
        console.log("user is not signed in to retrieve data");
      }
    });

    /*retrieving weights */
    auth.onAuthStateChanged((user) => {
      if (user) {
        const weightList = this.state.weights1;
        db.collection("weights of" + user.uid).onSnapshot((snapshot) => {
          let changes = snapshot.docChanges();
          changes.forEach((change) => {
            if (change.type === "added") {
              weightList.push({
                id: change.doc.id,
                Weight: change.doc.data().Weight
              });
            }
            this.setState({
              weights1: weightList
            });
          });
        });
      } else {
        console.log("user not found");
      }
    }); //current user
  }

  render() {
    //  console.log(this.state.weights1);
    return (
      <div className="wrapper">
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <Home
                  currentUser={this.state.currentUser}
                  weights1={this.state.weights1}
                />
              )}
            />
            <Route exact path="/signup" component={Signup}></Route>
            <Route exact path="/logIn" component={Login}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
