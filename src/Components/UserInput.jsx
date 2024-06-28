import React from "react";

function UserInput(props) {
  
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            required
            value={props.userInput.initialInvestment}
            onChange={(e) => props.onChangeInput("initialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            required
            value={props.userInput.annualInvestment}
            onChange={(e) => props.onChangeInput("annualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            required
            value={props.userInput.expectedReturn}
            onChange={(e) => props.onChangeInput("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            required
            value={props.userInput.duration}
            onChange={(e) => props.onChangeInput("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
