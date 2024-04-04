import { strict } from "assert";
import React, { memo, useState } from "react";
import { buffer } from "stream/consumers";

// function MinutesToHours() {
//   const [minutes, setMinutes] = useState<number | string>(0);
//   const [flipped, setFlipped] = useState(false);
//   const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setMinutes(event.target.value);
//   };
//   const setMin = parseInt(minutes.toString()) / 60;
//   const setH = parseInt(minutes.toString()) * 60;

//   const reset = () => setMinutes(0);
//   const onFlipp = () => {
//     reset();
//     setFlipped((current) => !current);
//   };
//   return (
//     <div>
//       <label htmlFor="minutes">Minutes</label>
//       <input
//         value={flipped ? setH || 0 : minutes}
//         id="minutes"
//         placeholder="Minutes"
//         type="number"
//         onChange={onChange}
//         disabled={flipped === true}
//       />
//       <div>
//         <label htmlFor="hours">Hours</label>
//         <input
//           value={flipped ? minutes : Math.round(setMin) || 0}
//           id="hours"
//           placeholder="Hours"
//           type="number"
//           disabled={flipped === false}
//           onChange={onChange}
//         />
//       </div>
//       <br />
//       <button onClick={reset}>Reset</button>
//       <button onClick={onFlipp}>Flip</button>
//     </div>
//   );
// }

// function KmToMiles() {
//   const [km, setKm] = useState<number | string>(0);
//   const [filp, setFlip] = useState(false);
//   const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setKm(event.target.value);
//   };

//   const setKms = parseInt(km.toString()) * 1.609;
//   const setM = parseInt(km.toString()) / 1.609;

//   const reset = () => setKm(0);
//   const onFlip = () => {
//     reset();
//     setFlip((current) => !current);
//   };
//   return (
//     <div>
//       <label htmlFor="Km">Km</label>
//       <input
//         value={filp ? Math.round(setM) || 0 : km}
//         id="Km"
//         type="number"
//         placeholder="Km"
//         onChange={onChange}
//         disabled={filp == true}
//       />
//       <div>
//         <label htmlFor="Miles">Miles</label>
//         <input
//           value={filp ? km : Math.round(setKms) || 0}
//           id="Miles"
//           type="number"
//           placeholder="Miles"
//           onChange={onChange}
//           disabled={filp == false}
//         />
//       </div>
//       <br />
//       <button onClick={reset}>Reset</button>
//       <button onClick={onFlip}>Flip</button>
//     </div>
//   );
// }

// function App() {
//   const [index, setIndex] = useState(-1);
//   const onSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setIndex(parseInt(event.target.value));
//   };
//   return (
//     <div>
//       <h1>Hello</h1>
//       <select value={index} onChange={onSelect}>
//         <option value={-1}>Select your units</option>
//         <option value={0}>Minutes & Hours</option>
//         <option value={1}>Km & Miles</option>
//       </select>
//       <hr></hr>
//       {index === 0 ? <MinutesToHours /> : null}
//       {index === 1 ? <KmToMiles /> : null}
//     </div>
//   );
// }

interface BtnProps {
  text: string;
  onClick?: () => void;
}

function Btn(props: BtnProps) {
  return (
    <button
      onClick={props.onClick}
      style={{
        backgroundColor: "blue",
        color: "white",
        padding: "10px 20px",
        border: 0,
        borderRadius: 10,
      }}
    >
      {props.text}
    </button>
  );
}

const MemorizedBtn = memo(Btn);
function App() {
  const [value, setValue] = useState("Save Changes");
  const changeValue = () => setValue("Revert Changes");
  return (
    <div>
      <MemorizedBtn text={value} onClick={changeValue} />
      <Btn text="Continue" />
    </div>
  );
}
export default App;
