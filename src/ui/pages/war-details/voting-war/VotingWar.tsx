import React from "react";
import { War } from "../../../../models/War";
import styles from "./VotingWar.module.scss";
import { VotingWarMeme } from "./meme/VotingWarMeme";
import { Loader } from "../../../components/loader/Loader";
import { WarHeader } from "../../../components/war-header/WarHeader";
import { useWarMemes } from "../../../../hooks/useWarMemes";
import { RockBottom } from "../../../components/rock-bottom/RockBottom";

interface VotingWarProps {
  war: War;
}

export function VotingWar({ war }: VotingWarProps) {
  const { memes, isLoading, memesBottomRef, nextPage } = useWarMemes(war.id);

  if (isLoading) return <Loader/>;

  return (
    <>
      <WarHeader war={war}>
        <p>These are the memes of the war <span className={styles.boldText}>{war.name}</span>.</p>
        <p>Their fate is left upon your sense of humor... unfortunately</p>
        <p>Use your best judgement and leave a score for each image.</p>
        <p>Or don't, I don't care 😒</p>
        {war.requires_meme_approval && (
          <p>
            Oh, and one more thing. Because this war requires approval of
            all memes, only the approved memes are listed below.
          </p>
        )}
      </WarHeader>
      <div className={styles.memes}>
        {memes.map(meme => <VotingWarMeme key={meme.id} meme={meme}/>)}
      </div>
      <RockBottom bottomRef={memesBottomRef} hasNextPage={!!nextPage}/>
    </>
  );
}
