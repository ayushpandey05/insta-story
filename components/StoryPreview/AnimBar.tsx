import React, { FC, memo, useEffect, useState } from "react";
import { Container } from "../Container";
import styles from "./AnimBar.module.css";

const AnimBar: FC = memo(() => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 100);
  }, []);

  return (
    <Container
      className={`${styles.container} ${animate ? styles.animContainer : ""}`}
    />
  );
});

export { AnimBar };
