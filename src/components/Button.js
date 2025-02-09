// import React from 'react';
// import './Button.css';
// import { Link } from 'react-router-dom';

// export function Button() {
//   return (
//     <Link to='contact'>
//       <button className='btn'>Contact</button>
//     </Link>
//   );
// }

import React from "react";
import "./Button.css";
import { Link } from "react-scroll";
//import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline", "btn--test"];

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link
      to={onClick}
      className="btn-mobile"
      spy={true}
      smooth={true}
      duration={500}
    >
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        //onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
