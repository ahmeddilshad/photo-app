import React from "react";
import SPINNER_GIF from "../assets/images/spinner.gif";
import "./spinner.scss";

const Spinner = () => (
  <div className="spinner">
    <img src={SPINNER_GIF} alt="Spinner" />
  </div>
);

export default Spinner;
