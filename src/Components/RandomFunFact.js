import React from "react";
import { useState } from "react";

const RandomFunFact = () => {
  const funFactArray = ["Hello", "Bonjour", "Kappa", 4, 5, 7, 8, 9, 10, 11];

  const [randomNumberArray, setRandomNumber] = useState(0);

  const randomNumber = Math.floor(Math.random() * 10 + 1);

  const randomFactHandler = () => {
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    console.log(randomNumber);
    setRandomNumber(randomNumber);
    console.log(randomNumber);
  };
  return (
    <div>
      <button
        onClick={() => {
          randomFactHandler();
        }}
      >
        Get a Random Fun Fact!
      </button>
      <div>{funFactArray[randomNumberArray]}</div>
    </div>
  );
};

export default RandomFunFact;

/*

export const RandomFunFact = () => {
  const funFactArray = [1, 2, 3, 4, 5, 7, 8, 9, 10];

  const randomNumber = Math.floor(Math.random() * 10 + 1);

  const randomFactHandler = () => {
    console.log("hello");
  };

  return (
    <div>
      <button
        onClick={() => {
          randomFactHandler;
        }}
      </button>
    </div>
  );
};

*/
