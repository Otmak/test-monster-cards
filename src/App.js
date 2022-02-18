import React, { Component } from 'react';
import CardList  from './components/card-list/card-list.js';
import { SearchBox } from './components/search-box/search-box.js';
import './App.css';


export default class App extends Component {
  constructor(props){
    super(props)
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

  prev(){

  }

  next(){

  }


  render() {
    const { monsters, searchFeild } = this.state;
    const filteredMonsters = monsters.filter( monster=> monster.name.toLowerCase().includes(searchFeild.toLowerCase()))

    return (
      <div className="App">
            <CardList 
                monsters={ monsters }
            />
      </div>
    )
  }
}

