import React from 'react';
// import logo from './logo.svg';

import { CardList } from './components/card-list/card-list.component';

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
    return (
      <div className="App">
        <input type="search"
          placeholder="search Monsters :v"
          onChange={e => this.setState({ searchField: e.target.value })} />
        <CardList monsters={this.state.monsters} />

      </div>
    );
  }

}

export default App;
