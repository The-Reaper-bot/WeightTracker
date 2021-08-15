import React from "react";
import { IndividualWeights } from "./IndividualWeights";

export const Weights = ({ weights1 }) => {
  return weights1.map((individualWeight) => (
    <IndividualWeights
      individualWeight={individualWeight}
      key={IndividualWeights.id}
    />
  ));
};
