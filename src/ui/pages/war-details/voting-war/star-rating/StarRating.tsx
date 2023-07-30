import React, { useEffect, useState } from "react";
import styles from "./StarRating.module.scss";
import starFilledSVG from "../../../../../assets/starFilled.svg";
import starHollowBlackSVG from "../../../../../assets/starHollowBlack.svg";
import starHollowRedSVG from "../../../../../assets/starHollowRed.svg";
import { voteService } from "../../../../../services/voteService";
import { useAuth } from "../../../../../context/authContext";
import { Vote } from "../../../../../models/Vote";


interface StarRatingProps {
  memeID: number;
}

export function StarRating({ memeID }: StarRatingProps) {
  const STAR_COUNT = 5;
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [vote, setVote] = useState<Vote | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);

  async function loadExistingRating() {
    try {
      const vote = await voteService.getVote(user!.id, memeID);
      if (vote) {
        setRating(vote.score);
        setVote(vote);
      }
    } catch (e) {
      setErrorMessage("Error occurred while checking existing rating for this meme");
    }
    setIsLoading(false);
  }

  useEffect(() => {
    loadExistingRating();
  }, [user]);

  function handleStarHover(index: number) {
    setHoverRating(index + 1);
  }

  async function handleStarClick(index: number) {
    const newRating = index + 1;
    setRating(newRating);
    try {
      if (vote) {
        const newVote = await voteService.updateVote(vote.id, newRating);
        setVote(newVote);
      } else {
        const updateVote = await voteService.createVote(memeID, newRating);
        setVote(updateVote);
      }
    } catch (e) {
      setErrorMessage("Error occurred while submitting a rating for this meme");
    }
    setIsLoading(false);
  }

  function handleMouseLeave() {
    setHoverRating(0);
  }

  function getRegularStarSVG(index: number): string {
    const shouldReturnFilledSVG = isLoading || index < (hoverRating || rating);
    return shouldReturnFilledSVG ? starFilledSVG : errorMessage ? starHollowRedSVG : starHollowBlackSVG;
  }

  return (
    <div>
      <div className={styles.starRow} onMouseLeave={handleMouseLeave}>
        {[...Array(STAR_COUNT)].map((_, index) => (
          <img
            key={index}
            onMouseEnter={() => handleStarHover(index)}
            onClick={() => handleStarClick(index)}
            className={isLoading ? styles.starLoading : styles.star}
            src={getRegularStarSVG(index)}
            alt="star"
          />
        ))}
      </div>
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
}
