import { useState } from "react";

export default function Form() {
  const [userName, setUserName] = useState("Bobs");
  const [submit, setSubmit] = useState(false);

  function handleInput(event) {
    setUserName(event.target.value);
  }

  function handleSubmit() {
    setSubmit(true);
  }

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Enter your name: "
          onChange={handleInput}
        />
        <input type="button" value="Submit" onClick={handleSubmit} />
      </form>

      {submit && <h1>{userName}</h1>}
    </>
  );
}
