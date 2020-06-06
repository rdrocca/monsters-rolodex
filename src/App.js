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

  };

  async componentDidMount() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
    this.setState({ monsters: users })


  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
          <SearchBox
            placeHolder="Search monters :vv"
            handleChange={e => this.setState({ searchField: e.target.value })}
          />
         <CardList monsters={filteredMonsters} />

      </div>
    );
  }

}

export default App;
