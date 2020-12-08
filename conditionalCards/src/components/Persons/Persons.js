import React from "react";
import Person from "./Person/Person";

const persons = (props) =>
  //Because we are using es6 arrow function we can omit the return statement and the curlys

  props.persons.map((persons, index) => {
    return (
      <Person
        click={() => props.clicked(index)}
        name={persons.name}
        hobby={persons.hobby}
        key={persons.id}
        changed={(event) => props.changed(event, persons)}
      />
    );
  });
export default persons;
