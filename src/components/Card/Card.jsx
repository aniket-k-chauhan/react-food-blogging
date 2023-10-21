import "./index.css";

const Card = ({ image, title, content }) => {
  return (
    <div className="cardCtn">
      <img className="cardImage" src={image} alt="article_image" />
      <div className="cardTitle">{title}</div>
      <div className="cardContent">{content}</div>
      <div className="cardBtnCtn">
        <span className="cardBtn">Read More</span>
      </div>
    </div>
  );
};

export default Card;
