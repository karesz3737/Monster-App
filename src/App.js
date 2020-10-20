import React, { Component } from "react";
import CardComponent from "./Components/card-list/card-list-component";
import SearchBar from "./Components/search-box/search-bar";
import TitleBar from "./Components/title-bar/title-bar.js";

import "./App.css";

class App extends React.Component {
  "";
  constructor() {
    super();
    this.state = {  
      monsters: [],
      searchField: "",
      placeholder: "Search for Robots",
      heading: "Robot  App",
    };
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((el) => this.setState({ monsters: el }));
  }
  render() {
    const { monsters, searchField } = this.state;
    const monstersFiltered = monsters.filter((el) =>
      el.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <TitleBar heading={this.state.heading} />
        <SearchBar
          placeholder={this.state.placeholder}
          handleChange={this.handleChange}
        />
        <CardComponent mon={monstersFiltered}></CardComponent>
      </div>
    );
  }
}
export default App;
