function EventExample() {
  function handle1() {
    alert("Handle");
  }

  return (
    <>
      <button onClick={handle1}>Button1</button>
      <button
        onMouseOver={() => {
          alert("Yo");
        }}
      >
        Button2
      </button>
    </>
  );
}

export default EventExample;
