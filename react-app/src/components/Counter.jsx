import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0); // useState( 초기값 )
  let number2 = 0;

  const handleClick = () => {
    setNumber(number + 1); // 비동기
    number2 += 1;
    console.log("넘버2: " + number2);
  };

  return (
    <>
      <h1>{number}</h1>
      <button onClick={handleClick}>+1</button>
    </>
  );
};

export default Counter;
