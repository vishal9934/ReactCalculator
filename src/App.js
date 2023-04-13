import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  function clickBtn(event) {
    setResult(result.concat(event.target.value));
  }
  function clearDisplay(){
    setResult("");
  }
  function calculate(){
    setResult(eval(result));
  }
  return (
    <div className="App">
      <form>
        <input type="text" id="input" value={result} />
      </form>

      <div className="keypad">
        <button value="C" onClick={clearDisplay}>
          C
        </button>
        <button value="/" onClick={clickBtn}>
          /
        </button>
        <button value="*" onClick={clickBtn}>
          *
        </button>
        <button value="-" onClick={clickBtn}>
          -
        </button>
        <button value="7" onClick={clickBtn}>
          7
        </button>
        <button value="8" onClick={clickBtn}>
          8
        </button>
        <button value="9" onClick={clickBtn}>
          9
        </button>
        <button value="+" onClick={clickBtn}>
          +
        </button>
        <button value="4" onClick={clickBtn}>
          4
        </button>
        <button value="5" onClick={clickBtn}>
          5
        </button>
        <button value="6" onClick={clickBtn}>
          6
        </button>
        <button value="=" onClick={calculate}>
          =
        </button>
        <button value="1" onClick={clickBtn}>
          1
        </button>
        <button value="2" onClick={clickBtn}>
          2
        </button>
        <button value="3" onClick={clickBtn}>
          3
        </button>
        <button value="0" onClick={clickBtn}>
          0
        </button>
        <button value="." onClick={clickBtn}>
          .
        </button>
      </div>
    </div>
  );
}

export default App;
