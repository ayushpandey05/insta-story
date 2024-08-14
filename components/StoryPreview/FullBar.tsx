import React, { FC } from "react";
import { Container } from "../Container";
import styles from "./FullBar.module.css";

const FullBar: FC = () => {
  return <Container className={styles.container} />;
};

export { FullBar };
