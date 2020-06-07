import React from 'react';
// import logo from './logo.svg';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

    // this.handleChange = this.handleChange.bind(this);

  };

  async componentDidMount() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
    this.setState({ monsters: users })
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <SearchBox
          placeHolder="Search monters :vv"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />

      </div>
    );
  }

}

export default App;
