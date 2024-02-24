import { useState } from "react";

export function Timer({ start }) {
  // useState hook for attach data to VirtualDOM

  //[0] - data (store value)
  //[1] - setter (effect the VirtualDOM)
  let [value, setValue] = useState(+start);

  // function expression
  const showValue = () => {
    //++value;           // not affected VirtualDOM
    setValue(value + 1); // update VirtualDOM
    console.log(value);
  };
    // return component content (for render)
    return (
        <>
          <h3>Timer</h3>
          <p>Value: {value}</p>
          <button onClick={showValue}>+</button>
        </>
      );
    }
    