import { Image } from "react-bootstrap";

const ReviewCard = ({ userName, rating, picture, review }) => {
  return (
    <div className="review-card">
      <h3 className="user-name">{userName}</h3>
      <Image
        src={picture}
        alt={userName}
        className="user-image"
        roundedCircle
      />
      <p className="rating">
        {Array.from({ length: rating }, (_, index) => (
          <img
            key={index}
            src="assets/icons_assets/star.png"
            alt="star"
            className="star-icon"
          />
        ))}
      </p>
      <p className="description">{review}</p>
    </div>
  );
};

export default ReviewCard;
