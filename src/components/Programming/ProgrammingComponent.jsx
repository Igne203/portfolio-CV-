import "./ProgrammingComponent.css";
import LinkImageComponent from "../LinkImage/LinkImage";

function AboutProgramming() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="about-programming block">
      <h2>My Work</h2>
      <p>A collection of projects I've worked on.</p>


        <div className="projects">
          <div className="project-name">
            <LinkImageComponent
            imageSrc={`${baseUrl}assets/html-css-project.png`}
            altText="HTML-CSS-Project"
            linkUrl="https://igne203.github.io/HTML-CSS/"
          />
          <p>HTML-CSS Project</p>
          </div>
          
          <div className="project-name">
            <LinkImageComponent
            imageSrc={`${baseUrl}assets/character-catalog-crud.png`}
            altText="Character-Catalog-CRUD"
            linkUrl="https://igne203.github.io/React_Frontend_CRUD/"
          />
          <p>Character Catalog CRUD</p>
          </div>
          <div className="project-name">
            <LinkImageComponent
            imageSrc={`${baseUrl}assets/adopt-project .png`}
            altText="Adopt-Project"
            linkUrl="https://igne203.github.io/react_first_project/"
          />
          <p>React Project</p>
          </div>
          
      </div>
    </div>
  );
}

export default AboutProgramming;

// use in AboutPage.jsx
// // I have a strong passion for programming and technology, and I am eager to learn and grow in the field of software development. In my free time, I enjoy exploring new programming languages and frameworks, as well as working on personal projects to enhance my skills. I am particularly interested in web development and have experience with HTML, CSS, JavaScript, and React. I am a quick learner and a team player, always willing to collaborate and contribute to the success of a project. I am excited about the opportunity to work in a dynamic and innovative environment where I can continue to develop my skills and make meaningful contributions to the field of software development.

{
  /* <p>
          My name is Ignė Viktorija Bagdonaitė. I have a strong passion for
          programming and technology, and I am eager to learn and grow in the
          field of software development. I create website layouts with HTML and
          style them with CSS. I can design responsive websites that work well
          on different devices. I also use JavaScript to make websites more
          dynamic and interactive.{" "}
        </p> */
}
