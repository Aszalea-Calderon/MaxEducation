import { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  //Older versions of react, this was the only way to manage state. But this is how you would work with it prior to this

  state = {
    persons: [
      { id: 1, name: "Aszalea", hobby: "cake" },
      { id: 2, name: "Anthony", hobby: "baking" },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  nameChangeHandler = (event, id) => {
    //1 Here we are reaching out to the state to check the id so we can edit accordingly
    const personsIndex = this.state.persons.findIndex((p) => {
      return p.id === id; //This is holding that data for now
    });

    //2 This then checks the personIndex
    const person = { ...this.state.persons[personsIndex] };

    //This could also be used instead of the above funciton but it is prefered to use the one above
    //const person = Object.assign({}, this.state.persons[personIndex])

    // 3  now we are assigning it to the name and updating who is being assigned
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personsIndex] = person;

    //Then after it has been copied and updated we can set it to our current state
    this.setState({
      persons: persons,
    });
  };

  deletePersonsHandeler = (personsIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personsIndex, 1);
    this.setState({ persons: persons });
  };

  //This sets if we can see the div below of not
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  render() {
    const style = {
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
                key={person.id} //This is needed so the document understands what you are asking it to do, see personIndex
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi</h1>
        <p>This is working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          {/* Note the toggle on the button */}
          Show friends
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
