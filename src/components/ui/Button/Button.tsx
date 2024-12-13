import Link from "next/link";
import React from "react";
import styles from "./button.module.css";
interface IButton {
  text: string;
  link: string;
}
function Button({ text, link }: IButton) {
  return (
    <Link href={link} className={styles.main_button}>
      {text}
    </Link>
  );
}

export default Button;
