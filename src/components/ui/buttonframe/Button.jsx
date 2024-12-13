import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";
function Button({ path, value, width }) {
  console.log(width);
  return (
    <Link
      className={styles.link_Style}
      style={{ width: `${width}px` }}
      to={path ? `${path}` : ""}
    >
      {value}
    </Link>
  );
}
Button.propTypes = {
  path: PropTypes.string,
  value: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

export default Button;
