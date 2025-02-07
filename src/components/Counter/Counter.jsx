import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpLong } from "@fortawesome/free-solid-svg-icons";
import { faDownLong } from "@fortawesome/free-solid-svg-icons";
import "./Counter.css";

const Counter = () => {
  const [increment, setincrement] = useState(0);

  const incrementHandler = () => {
    setincrement(increment + 1);
  };

  const decrementHandler = () => {
    setincrement(increment - 1);
  };

  return (
    <div className="main">
      <h1>POSITIVITY METER: {increment}</h1>
      {increment >= 0 && increment < 9 ? (
        <p>You're radiating positivity! Keep spreading the good vibes.</p>
      ) : increment < 0 ? (
        <p className="min-score">
          You got this! Even small steps forward are progress. 💙
        </p>
      ) : increment >= 10 ? (
        <p className="max-score">MAX SCORE REACHED</p>
      ) : (
        <p>You're radiating positivity! Keep spreading the good vibes.</p>
      )}
      <div className="btns">
        <button
          className="btn-green"
          onClick={incrementHandler}
          disabled={increment >= 10}
        >
          <FontAwesomeIcon icon={faUpLong} className="up" />
        </button>
        <button
          className="btn-red"
          onClick={decrementHandler}
          disabled={increment <= -10}
        >
          <FontAwesomeIcon icon={faDownLong} className="up" />
        </button>
      </div>
      {increment >= 10 ? (
        <p className="limit">
          {/* * AMPLE OF POSITIVITY *<br></br>BE GROUNDED */}
          You're at max positivity! Are you sure you're not a sunshine-powered
          robot? 🤖☀️
        </p>
      ) : null}
      {increment <= -10 ? (
        <p className="limit">
          {/* !! TOO MUCH NEGATIVITY !!<br></br>START BECOMING POSITIVE */}
          It's okay to have tough days. You're stronger than you think! 💪
        </p>
      ) : null}
    </div>
  );
};

export default Counter;
