import React, { useState } from "react";
import "./App.css";

function App() {
  const [val, setVal] = useState(2);
  return (
    <div className="App">
      <header className="App-header">
        <div>{val}</div>
        <button onClick={() => setVal(val * 10)}>10*</button>
      </header>
    </div>
  );
}

export default App;
