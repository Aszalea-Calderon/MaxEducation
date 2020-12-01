import React from "react";

const Person = (props) => {
  return (
    <div>
      <h1>
        My name is {props.name} and I am {Math.floor(Math.random() * 90)} years
        old. My hobby is {props.hobby}.
      </h1>
      <p>{props.children}</p>
    </div>
  );
};

export default Person;
