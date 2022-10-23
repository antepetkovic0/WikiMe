import React from "react";
import WikiImage from "./wiki.png";
import "./styles.css";

export const App = () => {
  return (
    <div>
      <h1>React TypeScript init</h1>
      <img src={WikiImage} alt="Wikipedia" width={300} height={300} />
    </div>
  );
};
