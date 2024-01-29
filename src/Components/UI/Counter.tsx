"use client";
import { FC } from "react";
import CountUp from "react-countup";

type CounterProps = {
  from: number;
  to: number;
  duration: number;
};

const Counter: FC<CounterProps> = ({ from, to, duration }) => {
  return (
    <div className="inline-block">
      <CountUp start={from} end={to} duration={duration ? duration : 1.5} />
    </div>
  );
};

export default Counter;
