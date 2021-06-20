import React from "react";

const TimeLine = () => {
  return (
    <div>
      <h2 className="TimeLine__Header">The Road So Far</h2>
      <div className="Timeline__Container">
        <div className="TimeLine__Container__Step">
          <h3>Graduated University of Amsterdam</h3>
          <div className="TimeLine__Container__Step__Time">2018 February</div>
        </div>
        <div className="TimeLine__Container__Step">
          <h3>Growth Hacker at startup dobbi</h3>
          <div className="TimeLine__Container__Step__Time">2018 September</div>
        </div>
        <div className="TimeLine__Container__Step">
          <h3>Growth Hacker at agency Direct Impact</h3>
          <div className="TimeLine__Container__Step__Time">2019 June</div>
        </div>
        <div className="TimeLine__Container__Step">
          <h3>Pushed my first code to Github</h3>
          <div className="TimeLine__Container__Step__Time">2019 December</div>
        </div>
        <div className="TimeLine__Container__Step">
          <h3>Left Direct Impact</h3>
          <div className="TimeLine__Container__Step__Time">2021 March</div>
        </div>
        <div className="TimeLine__Container__Step">
          <h3>Software Engineer at Cow Hills</h3>
          <div className="TimeLine__Container__Step__Time">Present</div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
