import React, { FC, memo } from "react";
import styles from "./index.module.css";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container: FC<ContainerProps> = memo(({ ...restProps }) => {
  return (
    <div
      {...restProps}
      className={`${styles.default} ${restProps?.className}`}
    />
  );
});

export { Container };
