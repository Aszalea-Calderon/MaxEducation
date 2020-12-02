import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = (props) => {
  const [personsState, setPersonState] = useState({
    persons: [
      { name: "Aszalea", hobby: "cake" },
      { name: "Anthony", hobby: "baking" },
    ],
    otherState: "some other value",
  });

  const switchNameHandler = () => {
    setPersonState({
      persons: [
        { name: "Anthony", hobby: "baking" },
        { name: "Aszalea", hobby: "cake" },
      ],
    });
  };
  return (
    <div className="App">
      <h1>Hi</h1>
      <p>This is working!</p>
      <button onClick={switchNameHandler}> Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        hobby={personsState.persons[0].hobby}
      >
        I'm a person {/*This is an example of Children props*/}
      </Person>
      <Person
        name={personsState.persons[1].name}
        hobby={personsState.persons[1].hobby}
      />
      <Person />
    </div>
  );
};

export default App;
