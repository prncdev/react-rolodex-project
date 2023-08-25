import { useEffect, useState } from 'react';
import './App.css';
import SearchBoxHookComponent from './Components/Search-box/Search-Box.Hook-Comp';
import CardListHookComponent from './Components/Card-list/Card-list.Hook-Comp';

function AppHook() {
  console.log('Render');
  // This is not a good idea to change state or work with state in a large component.
  // const [searchField, setSearchField] = useState('c'); // re-render will not occur when where is no change inside a state variable.
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMoster, setFilteredMoster] = useState(monsters);
  
  useEffect(() => {
  /* 
  Inside this callback is going to have codes as a effect that we want to happen inside our funtional component with this 
  useEffect hook. And that effect will depended on the dependecies array that we pass as a second argument, but if we don't
  pass any dependecy then the useEffect hook will run only once, just like componentDidMount method.
  */

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonsters(users))
    .catch(error => console.log(error));

  }, []);

  const searchMonster = (event) => {
    const searchFieldString = event.target.value.toLowerCase().trim();
    setSearchField(searchFieldString);
  }

  // Right now, we have only two state variables that are related to filteredMoster array which filters our the array elements based on the searchField value. But what if we have some others state that do something else, do wwe still want to re-run `filter` array loop? when there is no need to run filter array method? Of couse not, so we can prevent these sort of redundant execution with useEffect hook and it will only run when it needs to run.
  useEffect(() => {
    const monster = monsters.filter(monster => {
      return monster.name.toLowerCase().slice(0, searchField.length) === searchField;
    });

    setFilteredMoster(monster);
  }, [monsters, searchField]);

  return (
    <main className="App">
      <h1 className="app-title">Mosters Rolodex</h1>
      <SearchBoxHookComponent
        className={['monsters-search-box', 'search-box']}
        onChangeHandler={searchMonster}
        placeholder='Search a Monster'
      />

      <CardListHookComponent monsters={filteredMoster} />

    </main>
  )
}

export default AppHook;