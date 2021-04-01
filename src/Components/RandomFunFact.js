import React from "react";
import { useState } from "react";

const RandomFunFact = () => {
  const funFactArray = [
    "I have a panda themed mechanical keyboard.",
    "The Black Box in an aircraft is actually orange.",
    "I am afraid of clowns",
    "I think sushi is one of the most overated dishes in the world",
    "I did about 6 years of university level debating as a student",
    "Due to its many colonies, independence from Britain is celebrated somewhere in the world, on average, one in every seven days.",
    "Octopuses change color when they're dreaming.",
    "Legendary basketball player Shaq O'Neal hit the basket over 12.000 times but only scored 1 3-pointer.",
    "Saudi Arabia imports sand and camels from Australia.",
    "I really like trashy movies / series",
    "I listen to Kpop (Korean pop music) unironically",
    "Despite studying in Amsterdam for 6 years I never visited any museums, not my thing",
  ];

  const [randomNumberArray, setRandomNumber] = useState(0);

  const randomFactHandler = () => {
    const randomNumber = Math.floor(Math.random() * 12);
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
        Get a random fun fact, some of them about me!
      </button>
      <div className="RandomFunFact__Container__Text">
        {funFactArray[randomNumberArray]}
      </div>
    </div>
  );
};

export default RandomFunFact;
