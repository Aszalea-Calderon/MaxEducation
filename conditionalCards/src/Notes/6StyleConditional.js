import { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
//This change changes when the button styles are being rendered

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Aszalea", hobby: "cake" },
      { id: 2, name: "Anthony", hobby: "baking" },
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
    const style = {
      //This is inline styling currently
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonsHandeler(index)}
                name={person.name}
                hobby={person.hobby}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red"; //This is showing a red background on the button only when the button has been clicked
    }

    return (
      <div className="App">
        <h1>Hi</h1>
        <p>This is working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Show friends
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
