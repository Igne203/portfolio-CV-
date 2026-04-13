import "./AboutPage.css";
import AboutProgramming from "../../components/Programming/programmingComponent";
import AboutDance from "../../components/Dance/DanceComponent";
import AboutMusic from "../../components/Guitar/GuitarComponent";

function AboutPage() {
  return (
    <>
      <div className="about-programming-one img-background">
        <h1>ABOUT ME</h1>
      </div>
      <div className="about-programming-two block">
        <p>
          I create website layouts with HTML and style them with CSS. I can
          design responsive websites that work well on different devices. I also
          use JavaScript to make websites more dynamic and interactive. I am passionate about
          learning new technologies and improving my skills in web development. 
        </p>
      </div>
      <AboutProgramming />

      <AboutDance />
      <AboutMusic />
    </>
  );
}

export default AboutPage;
