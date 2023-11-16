import "../../css/hero.css";
import { Button } from "../button";
import { useState } from "react";

export const Hero = () => {
  const [fixedMisc, setFixedMisc] = useState(true);

  const updateFixedMisc = () => {
    if (window.scrollY >= 350) {
      setFixedMisc(false);
    } else {
      setFixedMisc(true);
    }
    console.log(window.scrollY);
  };

  window.addEventListener("scroll", updateFixedMisc);
  return (
    <div className="hero-container">
      <img src="images/nick-rickert.jpg" alt="black-bikey"></img>
      <div className={fixedMisc ? "fixed-misc" : "fixed-misc-yeet"}>
        Quick and fast delivery
      </div>
      <div className="scroll">Scroll down</div>
      <h1>SPINERGY </h1>
      <p>BUY HIGH END BIKES</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER
          <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};
