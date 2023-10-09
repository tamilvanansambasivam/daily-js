import React from "react";
import ReactDOM from "react-dom/client";
import DefOfDef from "./src/DefOfDef";

const App = () => {
  return (
    <div>
      <details>
        <summary>Definition of Definition</summary>
        <DefOfDef/>
      </details>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
