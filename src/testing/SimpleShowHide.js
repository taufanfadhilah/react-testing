import React, { useState } from "react";

const SimpleShowHide = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div>
      <p>Im {show ? "show" : "hide"}</p>
      <button onClick={toggleShow}>{show ? "hide" : "show"}</button>
    </div>
  );
};

export default SimpleShowHide;
