import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [heading, setHeading] = useState("");
  function changeInput(event) {
    setName(event.target.value);
  }

  function changeHeading(event) {
    setHeading(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {heading}!</h1>
      <form onSubmit={changeHeading}>
        <input
          type="text"
          placeholder="What's your name?"
          onChange={changeInput}
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
