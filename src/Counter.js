import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseCount } from "./utils/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const currentCount = useSelector((store) => store?.counter?.currentCount);

  const onBtnClick = () => {
    dispatch(increaseCount());
  };

  return (
    <div>
      <h1>Current count is: {currentCount}</h1>
      <button onClick={() => onBtnClick()}> Click me </button>
    </div>
  );
};

export default Counter;
