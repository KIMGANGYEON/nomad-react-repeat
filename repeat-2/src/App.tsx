import React, { useEffect, useState } from "react";
import Button from "./button";

function Hello() {
  function byeFn() {
    console.log("bye");
  }

  function hiFn() {
    console.log("created");
    return byeFn;
  }
  useEffect(() => {
    console.log("hie");
  }, []);
  useEffect(function () {
    console.log("hie");
    return function () {
      console.log("bye");
    };
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  // const [counter, setValue] = useState(0);
  // const [keyword, setKeyword] = useState("");
  // const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
  //   setKeyword(event.target.value);
  // const onClick = () => setValue((prev) => prev + 1);
  // console.log("renbder");
  // const iRunOnce = () => {
  //   console.log("run once");
  // };
  // useEffect(iRunOnce, []);
  // useEffect(() => {
  //   if (keyword !== "" && keyword.length > 6) {
  //     console.log("SEARCH", keyword);
  //   }
  // }, [keyword]);
  // return (
  //   <div>
  //     <input
  //       value={keyword}
  //       onChange={onChange}
  //       type="text"
  //       placeholder="Search here"
  //     />
  //     <h1>Let's go {counter}</h1>
  //     <button onClick={onClick}>Click me!</button>
  //     <Button text="hello" />
  //   </div>
  // );

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
