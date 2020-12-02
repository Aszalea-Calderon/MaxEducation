import { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  //Older versions of react, this was the only way to manage state. But this is how you would work with it prior to this

  state = {
    persons: [
      { name: "Aszalea", hobby: "cake" },
      { name: "Anthony", hobby: "baking" },
    ],
    otherState: "some other value",
    showPersons: false,
  };
  switchNameHandler = (newName, newHobby) => {
    //this.state.persons[0].name ="Aszalea";  //?This is not good
    this.setState({
      persons: [
        { name: newName, hobby: newHobby },
        { name: "Anthony", hobby: "baking" },
        { name: "Aszalea", hobby: "cake" },
      ],
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, hobby: "flying" },
        { name: "Anthony", hobby: "baking" },
        { name: "Aszalea", hobby: "cake" },
      ],
    });
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

    //This is now holding the JSX that could be rendered to the page
    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            hobby={this.state.persons[0].hobby}
          >
            I'm a person {/*This is an example of Children props*/}
          </Person>
          <Person
            click={this.switchNameHandler}
            name={this.state.persons[1].name}
            hobby={this.state.persons[1].hobby}
          />
          <Person
            changed={this.nameChangeHandler}
            name={this.state.persons[0].name}
            hobby={this.state.persons[0].hobby}
          />
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
        {persons} {/* //This is what is now rendering to the page */}
      </div>
    );
  }
}

export default App;
