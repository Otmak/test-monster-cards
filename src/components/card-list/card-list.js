import React, {Component} from 'react';
import { Card } from '../card/card-component.js'
import './card-list.css';


export default class CardList extends Component {
  constructor(props){
    super(props);
    this.state = {
      monsters: [],
      searchFeild: '',
      display: 'none'
     };
     this.carousel = React.createRef();

  }

  prev =()=> {

  	console.log('clicked prev');
  	const gap = 5;
  	const node = this.carousel.current;
  	let width = node.offsetWidth;
	console.log('Clicked NExt >>', this, node);
	node.scrollBy(-(width + gap), 0)
  }

  next =()=> {
  	
  	const gap = 5;
  	const node = this.carousel.current;
  	let width = node.offsetWidth;
	console.log('Clicked NExt >>', this, node);
	node.scrollBy(width + gap, 0);
	this.setState( {'display': 'flex'});


  }


  render(){
  	// console.log(this)
  	const {display} = this.state; 

  	return(
		<div id="wrapper">
			<div id="content">
	        	<div ref={this.carousel} id="carousel">
				 	{ this.props.monsters.map( monster => ( 
				 	<Card key={monster.id} monster={ monster }/> )) 
				 	} 
			 	</div>
		 	</div>
		</div>
		)
  }
}

