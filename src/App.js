import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.js'
import { SearchBox } from './components/search-box/search-box.js'
import './App.css';



export default class App extends Component {
  constructor(){
    super()
    this.state = {
      monsters: [],
      searchFeild: ''
     }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json() )
    .then(users => this.setState ({ monsters: users }) )
    // console.log(monsters)
  }
  render() {
    const { monsters, searchFeild } = this.state;
    const filteredMonsters = monsters.filter( monster=> monster.name.toLowerCase().includes(searchFeild.toLowerCase()))

    return (
      <div className="App">
        <SearchBox 
            placeholder="Search Monster" 
            handleChange={ (e) => { this.setState({ searchFeild: e.target.value })} }
        />
        <CardList 
            monsters={ filteredMonsters }
        />
      </div>
    )
  }
}

