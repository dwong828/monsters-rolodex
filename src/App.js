import React, { Component } from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      // monsters: [
      // {
      //   name: 'Frankenstein',
      //   id: 'aaa'
      // },
      // {
      //   name: 'Dracula',
      //   id: 'bbb'
      // },
      // {
      //   name: 'Zombie',
      //   id: 'ccc'
      // }
      //],
      monsters: [],
      searchField: ""
    };

   //don't need this b/c we used the => function to declare the function
   // this.handleChange = this.handleChange.bind(this);
  }

  //fetch user info, convert to json, and populate the monsters array
  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
    //.then(users => console.log(users))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value }, () =>
      console.log(this.state)
    );
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder="Search Monsters Here"
          handleChange={this.handleChange}>
        </SearchBox>

        <CardList monsters={filteredMonsters}> </CardList>
      </div>
    );
  }
}

export default App;
