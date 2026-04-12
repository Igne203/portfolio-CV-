import "./LinkImage.css";

function LinkImageComponent({ imageSrc, altText, linkUrl }) {
  return (
    <a href={linkUrl} target="_blank" rel="noopener noreferrer">
      <img
        src={imageSrc}
        alt={altText}
        className="link-image"
      />
    </a>
  );
}

export default LinkImageComponent;