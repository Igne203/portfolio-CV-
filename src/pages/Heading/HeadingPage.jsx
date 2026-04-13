import "./HeadingPage.css";

function HeadingPage() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="heading-page">
      <div className="heading-page-image">
        <img src={`${baseUrl}assets/portret1.jpg`} alt="Portfolio portrait" />
      </div>

      <div className="heading-page-content">
        <h1>
          My <br /> Portfolio
        </h1>

        <p>
          Welcome to my portfolio! I am a passionate web developer with experience in creating responsive and user-friendly websites. In this portfolio, you will find examples of my work. I will continue to update this portfolio as I take on new projects and develop my skills. I am excited to share my work with you and look forward to connecting with potential collaborators and employers in the future.
        </p>
      </div>
    </div>
  );
}

export default HeadingPage;