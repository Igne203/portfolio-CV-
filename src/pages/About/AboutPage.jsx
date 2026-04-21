import "./AboutPage.css";
import AboutProgramming from "../../components/Programming/programmingComponent";
import AboutDance from "../../components/Dance/DanceComponent";
import AboutMusic from "../../components/Guitar/GuitarComponent";

function AboutPage() {
  const baseUrl = import.meta.env.BASE_URL;
  window.scrollTo({
    top: 100,
    left: 100,
    behavior: "smooth",
  });
  return (
    <>
      <div className="about-programming-one img-background">
        <h1>ABOUT ME</h1>
      </div>
      <div className="about-programming-two block">
        <p>
          I create website layouts with HTML and style them with CSS. I can
          design responsive websites that work well on different devices. I also
          use JavaScript to make websites more dynamic and interactive. I am
          passionate about learning new technologies and improving my skills in
          web development.
        </p>
      </div>
      <AboutProgramming />
      <div className="about-programming-two block">
        <p>
          I am familiar with several programming languages, including C++,
          Python, and JavaScript, which I have mentioned earlier. These
          languages have helped me build a solid foundation in programming and
          develop a broader understanding of both problem-solving and web
          development.
        </p>
      </div>

      <AboutDance />
      <div className="dance-content">
        <a
          href="https://www.instagram.com/p/DXSX5nPjS5G/"
          target="_blank"
          rel="noopener noreferrer"
          className="dance-image-link"
        >
          <img
            src={`${baseUrl}assets/Dance-Reel-Red.jpg`}
            alt="Dance Performance Video"
            className="dance-image"
          />
        </a>

        <p>
          I am currently dancing at the{" "}
          <a
            href="https://www.instagram.com/spindulys_sokiaivisiems/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-link"
          >
            Spindulys dance club
          </a>
          . I can't thank them enough for the opportunity to express myself
          through dance. I believe that all of my discipline and conviction
          comes from years of dedication and practice. I am forever grateful for
          the many skills I have gained due to this industry. Patience,
          resilience, and determination are just a few of the qualities I have
          developed through dance.
        </p>
      </div>
      <AboutMusic />
      <div className="music-content block">
        <p>
          I'm passionate about classical music. I graduated from Taurage Art
          School with top grades in music theory, history and guitar. This year
          I reaplied to study piano.
        </p>
        <div>
          <img src={`${baseUrl}assets/piano.jpg`} alt="Piano Practice" />
        </div>
      </div>
    </>
  );
}

export default AboutPage;
