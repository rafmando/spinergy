import "../../css/hero.css";
import { Button } from "../button";

export const Hero = () => {
  return (
    <div className="hero-container">
      <img src="images/nick-rickert.jpg" alt="black-bikey"></img>
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
