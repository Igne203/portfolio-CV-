import "./GuitarComponent.css";
import LinkImageComponent from "../LinkImage/LinkImage";

function AboutMusic() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <>
      <div className="music img-background">
        <h1>MUSIC</h1>
        {/* <p id="block-paragraph">I'm passionate about classical music. I graduated from Taurage Art School with top grades in music theory, history and guitar. This year I reaplied to study piano. </p> */}
        {/* <a href=""></a> */}
      </div>

      <div className="about-music-second block">
        <h2>Hear me play</h2>
        <p>
          I'm passionate about classical music. I graduated from Taurage Art
          School with top grades in music theory, history and guitar. This year
          I reaplied to study piano.{" "}
        </p>
        <div className="videos">
          <LinkImageComponent
            imageSrc={`${baseUrl}assets/First-video.png`}
            altText="Guitar Performance Video"
            linkUrl="https://www.facebook.com/reel/863995728996952"
          />
          <LinkImageComponent
            imageSrc={`${baseUrl}assets/Second-video.png`}
            altText="Guitar Performance Video"
            linkUrl="https://youtu.be/gyVRcJpVVVE"
          />
          <LinkImageComponent
            imageSrc={`${baseUrl}assets/Third-video.png`}
            altText="Guitar Performance Video"
            linkUrl="https://youtu.be/EeqKM8de9eE"
          />
        </div>
      </div>
    </>
  );
}

export default AboutMusic;
