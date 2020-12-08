import { Component } from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";
import styled from "styled-components";

//This change changes when the button styles are being rendered & changes the color of the first paragraph by the amount of persons in the persons state
const StyledButton = styled.button`
  background-color: ${(props) =>
    props.alt
      ? "red"
      : "green"}; //This props is coming in from the button. alt is referencing the component switch
  box-shadow: 0 10px 4px #ccc;
  border: 1px solid azure;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.alt
        ? "salmon"
        : "lightgreen"}; //This props is coming in from the button. alt is referencing the component switch
    color: black;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Aszalea", hobby: "cake" },
      { id: 2, name: "Anthony", hobby: "baking" },
      { id: 3, name: "Pumpkin", hobby: "purring" },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  nameChangeHandler = (event, id) => {
    const personsIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personsIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personsIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  deletePersonsHandeler = (personsIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personsIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonsHandeler}
            changed={this.nameChangeHandler}
          />
        </div>
      );
      // style.backgroundColor = "red"; //This is showing a red background on the button only when the button has been clicked. Note that this is overriding the backgroundColor element within styles
      // style[":hover"] = {
      //   //Note that we use brackets as .notation doesn't work on a string and we need to use bracket
      //   backgroundColor: "lightred",
      //   color: "black",
      // };
    }

    //change the color based on the length of the persons list. These classnames have been assigned in app.css and we can bring them here. We are joining then so we can use both
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red"); //classes will be = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold"); //classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi</h1>
        <p className={classes.join(" ")}>This is working!</p>{" "}
        {/* We assigned it here*/}
        <StyledButton
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >
          Show friends
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default App; //This wrapping is just adding the features of Radium thoughout
