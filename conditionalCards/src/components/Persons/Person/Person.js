import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;

  border: 1px azure solid;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const Person = (props) => {
  return (
    <div>
      <StyledDiv>
        <h1 onClick={props.click}>
          My name is {props.name} and I am {Math.floor(Math.random() * 90)}{" "}
          years old. My hobby is {props.hobby}.
        </h1>
        <input type="text" placeholder="name" onChange={props.changed}></input>
        <p>{props.children}</p>
      </StyledDiv>
    </div>
  );
};

export default Person;
