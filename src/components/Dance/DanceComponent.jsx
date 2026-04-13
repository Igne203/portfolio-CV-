import "./DanceComponent.css";
import LinkImageComponent from "../LinkImage/LinkImage";

function AboutDance() {
  return (
    <>
      <div className="dance img-background">
        <h1>DANCE</h1>
      </div>

      <div className="dance-content-one">
        <p>
          I have a strong passion for dance. Dance has been a significant part
          of my life, allowing me to express myself creatively and connect with
          others through movement.
        </p>
      </div>

      <div className="dance-content-two">
        <h2>Watch me dance</h2>

        <a href="https://www.instagram.com/p/DQZOlUWDW3k/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/Dance-Reel.png" alt="Dance Performance Video" />
        </a>
      </div>
    </>
  );
}

export default AboutDance;
