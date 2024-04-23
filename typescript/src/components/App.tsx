import React, { useState } from "react";
import logo from "../logo.svg";
import "./App.css";
import { useSearchParams } from "react-router-dom";

function App({
  flag1 = false,
  flag2 = false,
}: {
  flag1?: boolean;
  flag2?: boolean;
}) {
  const [value, setValue] = useState("");
  const [searchParams] = useSearchParams();

  if (searchParams.has("flag1")) {
    flag1 = Boolean(searchParams.get("flag1"));
  }

  if (searchParams.has("flag2")) {
    flag2 = Boolean(searchParams.get("flag2"));
  }

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

  if (value === "secret") {
    console.log("Secret!");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          data-testid="input-field"
        />
        {value === "secret" && (
          <p data-testid="secret-text">This is a secret text</p>
        )}
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
