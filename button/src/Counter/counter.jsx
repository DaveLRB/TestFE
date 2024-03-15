import { useState } from "react";
import { TextColor, SizeStyle, ButtonStyle, TextStyle } from "./styles.js";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  const decrement = () => {
    setCount((count) => count - 1);
  };

  return (
    <>
    
      <ButtonStyle onClick={increment} data-testid="current-count">+</ButtonStyle>

      <ButtonStyle onClick={decrement}>-</ButtonStyle>

      <ButtonStyle onClick={reset} data-testid="reset-button">R</ButtonStyle>

      <TextStyle>Count is </TextStyle>

      <TextColor isEven={count % 2 === 0}>
        <SizeStyle isOdd={count % 3 === 0}>{count}</SizeStyle>
      </TextColor>
    </>
  );
};

export default Counter;
