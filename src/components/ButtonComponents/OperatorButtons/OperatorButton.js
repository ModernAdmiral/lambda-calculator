import React from "react";

const OperatorButton = (props) => {
  return (
    <button className='button operatorButton'>
      {props.operator.value}
    </button>
  );
};

export default OperatorButton;