import React from "react";
import PropTypes from "prop-types"
import styles from "./Button.module.scss"

const Button = ({ btnText, btnLink }) => {

  return (
    <button className={styles.button} type="button" onClick={(e) => {
      e.preventDefault();
      console.log({btnLink})
      window.location.replace(`#${btnLink}`);
    }}>{btnText}
    </button>
  )
}

Button.propTypes = {
  btnLink: PropTypes.string,
  btnText: PropTypes.string
}

export default Button