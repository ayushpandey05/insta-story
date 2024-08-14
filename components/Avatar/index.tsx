import React, { FC } from "react";
import styles from "./index.module.css";

interface AvatarProps {
  imgUrl: string;
}

const Avatar: FC<AvatarProps> = ({ imgUrl }) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <img className={styles.image} src={imgUrl} />
      </div>
    </div>
  );
};

export { Avatar };
export type { AvatarProps };
