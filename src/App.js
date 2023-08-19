import React, { Component } from 'react';
import './App.css';
import CardList from './Components/Card-list/card-list.component';
import SearchBox from './Components/Search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }

    console.log('1');
  }

  searchMonster = (event) => {
    event.preventDefault();
    const searchField = event.target.value.toLowerCase().trim();

    this.setState(
      () => {
        return { searchField } // when we assign variable to an object then what javascript will do is, it sets the key name as the name of variable and value as variable's value. ES6 Shorthand syntax.

        // Above statement same as below.
        // return {searchField: searchField}
      },

      () => {
        // console.log(monster);
      }
    );
  }

  componentDidMount() {
    console.log('3');
    // Making an http get request for getting users from json place holder API.
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(response => {
        // Assigning reponsed data to the state property.
        this.setState(() => {
          return { monsters: response }
        });
      }).catch(error => console.log(error));
  }

  render() {
    console.log('2');
    // state properties.
    const { monsters, searchField } = this.state;

    // Class methods.
    const { searchMonster } = this;

    const monster = monsters.filter(monster => {
      // We can either use this function
      return monster.name.toLowerCase().slice(0, searchField.length) === searchField;
      // Or we can use this, but above function is more efficient.
      // return monster.name.toLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox
          className={['monsters-search-box', 'search-box']}
          onChangeHandler={searchMonster}
          placeholder='Search a Monster'
        />

        <CardList 
          monsters={monster}
        />
      </div>
    );
  }
}

export default App;
