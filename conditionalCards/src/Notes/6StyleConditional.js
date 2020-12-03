import { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
//This change changes when the button styles are being rendered & changes the color of the first paragraph by the amount of persons in the persons state

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
    const style = {
      //This is inline styling currently
      backgroundColor: "green",
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
      style.backgroundColor = "red"; //This is showing a red background on the button only when the button has been clicked. Note that this is overriding the backgroundColor element within styles
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
        <button style={style} onClick={this.togglePersonsHandler}>
          Show friends
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
