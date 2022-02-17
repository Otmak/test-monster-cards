import React from 'react';
import './card.styles.css';

export const Card = (props) =>(
	<div className="card-container">
		<img alt={props.monster.name} src={`https://robohash.org/${props.monster.id}?set=set${props.monster.id}&size=160x180`}/>
		<h2> {props.monster.name} </h2>
		<p> { props.monster.email } </p>
	</div>
	)