import { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Aszalea", hobby: "cake" },
      { name: "Anthony", hobby: "baking" },
    ],
    otherState: "some other value",
  };
  switchNameHandler = () => {
    //this.state.persons[0].name ="Aszalea";  //?This is not good
    this.setState({
      persons: [
        { name: "Anthony", hobby: "baking" },
        { name: "Aszalea", hobby: "cake" },
      ],
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Hi</h1>
        <p>This is working!</p>
        <button onClick={this.switchNameHandler}> Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          hobby={this.state.persons[0].hobby}
        >
          I'm a person {/*This is an example of Children props*/}
        </Person>
        <Person
          name={this.state.persons[1].name}
          hobby={this.state.persons[1].hobby}
        />
        <Person />
      </div>
    );
  }
}

export default App;
