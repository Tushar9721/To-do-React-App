import React, { useState } from "react";

function ToDoItem(props) {
  const [clicked, setClicked] = useState(false);

  //when ever item is clicked the value will change
  function addLine() {
    setClicked((preValue) => {
      return !preValue;
    });
  }

  return (
    <div onClick={addLine}>
      <li style={{ textDecoration: clicked ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
