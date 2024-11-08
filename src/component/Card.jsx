export default function Card(props) {
  console.log(props);
  return (
    <>
      <div style={{ border: "4px solid blue" }}>
        <h1>Name: {props.name}</h1>
        <h1>Rollno: {props.rollno} </h1>
      </div>
    </>
  );
}

// export default function Card({name,rollno}) {
//     return (
//       <>
//         <div style={{ border: "4px solid blue" }}>
//           <h1>Name: {name}</h1>
//           <h1>Rollno: {rollno} </h1>
//         </div>
//       </>
//     );
//   }
  

// in App.jsx <Card name='Mohan' rollno="11"/>