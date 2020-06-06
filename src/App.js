import React from 'react';
// import logo from './logo.svg';

import { CardList } from './components/card-list/card-list.component';

import './App.css';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      monsters: []
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
        <CardList name="Richard">

          {this.state.monsters.map(monsters => (
            <h1 key={monsters.id}>{monsters.name}</h1>
          ))}
        </CardList>
      </div>
    );
  }

}

export default App;
