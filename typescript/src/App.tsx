import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App({
  flag1 = false,
  flag2 = false,
}: {
  flag1?: boolean;
  flag2?: boolean;
}) {
  if (flag1) {
    console.log("flag1 is true");
  } else {
    console.log("flag1 is false");
  }

  if (flag2) {
    console.log("flag2 is true");
  } else {
    console.log("flag2 is false");
  }

  if (flag2 && flag1) {
    console.log("flag2 && flag1 is true");
  } else {
    console.log("flag2 && flag1 is false");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
