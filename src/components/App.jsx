import React, { useState } from "react";

function App() {
  const [inText, setText] = useState("");
  const [newText, setN] = useState("");
  function update(event) {
    setText(event.target.value);
  }
  function newUp(event) {
    setText(event.target.value);
    setN(inText);
  }
  return (
    <div className="container">
      <h1>hello : {newText}</h1>
      <input onChange={update} type="text" placeholder="What's your name?" />
      <button onMouseOver={newUp}>Submit</button>
    </div>
  );
}

export default App;
