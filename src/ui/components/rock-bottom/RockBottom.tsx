import styles from "./RockBottom.module.scss";
import React, { MutableRefObject } from "react";

interface RockBottomProps {
  bottomRef: MutableRefObject<null>;
  hasNextPage: boolean;
}

/**
 * Component meant to be placed at the bottom of a component
 * with a list that has an infinite scroll
 */
export function RockBottom({ bottomRef, hasNextPage }: RockBottomProps) {
  return (
    <>
      <div ref={bottomRef}></div>
      {!hasNextPage && (
        <div className={styles.rockBottom}>
          <p>You've finally hit rock bottom!</p>
          <p>At least you can't get lower that this 🥲</p>
        </div>
      )}
    </>
  );
}
