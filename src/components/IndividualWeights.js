import React from "react";
import Icon from "react-icons-kit";
import { edit2 } from "react-icons-kit/feather/edit2";
import { trash } from "react-icons-kit/feather/trash";

export const IndividualWeights = ({ individualWeight }) => {
  return (
    <div className="weight">
      <div>{individualWeight.Weight}</div>
      <div className="actions-div">
        <div>
          <Icon size={18} icon={edit2} />
        </div>
        <div className="delete-btn">
          <Icon size={18} icon={trash} />
        </div>
      </div>
    </div>
  );
};
