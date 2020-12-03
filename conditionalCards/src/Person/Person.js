import React from "react";
import "./Person.css";

const Person = (props) => {
  return (
    <div className="Person">
      <h1 onClick={props.click}>
        My name is {props.name} and I am {Math.floor(Math.random() * 90)} years
        old. My hobby is {props.hobby}.
      </h1>
      <input type="text" placeholder="name" onChange={props.changed}></input>
      <p>{props.children}</p>
    </div>
  );
};

export default Person;
