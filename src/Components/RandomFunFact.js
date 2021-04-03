import React from "react";
import { useState } from "react";

const RandomFunFact = () => {
  const funFactArray = [
    "Fun Fact: I really like fun facts.",
    "I have a panda themed mechanical keyboard.",
    "The Black Box in an aircraft is actually orange.",
    "I am afraid of clowns.",
    "I think sushi is one of the most overated dishes in the world.",
    "I did about 6 years of university level debating as a student.",
    "Octopuses change color when they're dreaming.",
    "Basketball player Shaq O'Neal hit the basket over 12.000 times but only scored 1 3-pointer.",
    "Saudi Arabia imports sand and camels from Australia.",
    "I really like trashy movies and series.",
    "I listen to Kpop (Korean pop music) unironically.",
    "Despite studying in Amsterdam for 6 years I never visited any museums",
  ];

  const [randomNumberArray, setRandomNumber] = useState(0);

  const randomFactHandler = () => {
    const randomNumber = Math.floor(Math.random() * 12);
    setRandomNumber(randomNumber);
  };
  return (
    <div className="RandomFunFact__Container">
      <button
        className="RandomFunFact__Container__Button"
        onClick={() => {
          randomFactHandler();
        }}
      >
        Press me for a fun fact, some of them about me
      </button>
      <div className="RandomFunFact__Container__Text">
        {funFactArray[randomNumberArray]}
      </div>
    </div>
  );
};

export default RandomFunFact;
