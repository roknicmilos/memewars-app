import React from "react";
import { Meme } from "../../../../../models/Meme";
import styles from "./VotingWarMeme.module.scss";

interface VotingWarMemeProps {
  meme: Meme;
}

export function VotingWarMeme({ meme }: VotingWarMemeProps) {
  return (
    <div className={ styles.meme }>
      <img
        className={ styles.memeImage }
        src={ meme.image }
        alt={ `meme ${ meme.id }` }
        onClick={ () => window.location.href = meme.image }/>
    </div>
  );
}
