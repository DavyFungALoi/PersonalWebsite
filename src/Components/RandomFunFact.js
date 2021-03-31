import React from "react";
import { useState } from "react";

const RandomFunFact = () => {
  const funFactArray = [
    "The Black Box in an aircraft is actually orange.",
    "The Russian October Revolution takes place in September, this is because they followed the Julian Calendar.",
    "Napoleon never started a war, others always have always declared war on him first.",
    "Due to its many colonies, independence from Britain is celebrated somewhere in the world, on average, one in every seven days.",
    "Octopuses change color when they're dreaming.",
    "The entire Toy Story 2 Movie was once deleted during production and it was only saved because an employee had a backup at home.",
    "Australia fought a war against Emus...and lost.",
    "Legendary basketball player Shaq O'Neal hit the basket over 12.000 times but only scored 1 3-pointer.",
    "Saudi Arabia imports sand and camels from Australia.",
    "When Sweden plays Denmark in Sweden the scoreboard reads SWE - DEN. The remaining letters read DEN- MARK. ",
  ];

  const [randomNumberArray, setRandomNumber] = useState(0);

  const randomFactHandler = () => {
    const randomNumber = Math.floor(Math.random() * 10);
    setRandomNumber(randomNumber);
  };
  return (
    <div className="RandomFunFact__Container">
      <h2>Fun Fact: I really like fun facts</h2>
      <button
        className="RandomFunFact__Container__Button"
        onClick={() => {
          randomFactHandler();
        }}
      >
        Get a random fun fact!
      </button>
      <div className="RandomFunFact__Container__Text">
        {funFactArray[randomNumberArray]}
      </div>
    </div>
  );
};

export default RandomFunFact;
