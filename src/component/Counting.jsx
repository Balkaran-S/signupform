import { useState } from "react";



export default function Counting() {
  const [count, setCount] = useState(0);

  function HandleInc() {
    setCount(count + 1);
  }

  function HandleDec() {
    setCount(count - 1);
  }



  return (
    <div>
      <h1>Counting</h1>
      <button onClick={HandleInc}>Increase</button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
      <h2>Count: {count} </h2>
    </div>
  );
}
