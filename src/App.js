import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  componentDidMount() {
    console.log("Component did mount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((userResponse) => userResponse.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder='Search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
