import React, { useState } from "react";
import styles from "./StarRating.module.scss";
import starFilledSVG from "../../../../../assets/starFilled.svg";
import starHollowSVG from "../../../../../assets/starHollow.svg";


export function StarRating() {
  const STAR_COUNT = 5;
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleStarHover = (index: number) => {
    setHoverRating(index + 1);
  };

  const handleStarClick = (index: number) => {
    setRating(index + 1);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div className={styles.starRow} onMouseLeave={handleMouseLeave}>
      {[...Array(STAR_COUNT)].map((_, index) => (
        <img
          key={index}
          onMouseEnter={() => handleStarHover(index)}
          onClick={() => handleStarClick(index)}
          className={styles.star}
          src={index < (hoverRating || rating) ? starFilledSVG : starHollowSVG}
          alt="star"
        />
      ))}
    </div>
  );
}
