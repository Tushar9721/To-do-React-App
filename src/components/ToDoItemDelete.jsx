import React from "react";

function ToDoItemDelete(props) {
  return (
    <div
      onClick={() => {
        props.onChange(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItemDelete;
