import React from "react";

const Card = (props) => {
  return (
    <div className={`border rounded ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
