import React from 'react'
import './style.css';

const Card = (props) => {

	const {last_name , first_name , email , avatar , id} = props.data;

	return (
		<div className="card">
		  <img src={avatar} alt={first_name} />
		  <div className="container">
		    <h4><b>{first_name + " " + last_name}</b></h4> 
		    <p>{email}</p> 
		  </div>
		  <button onClick={() => props.onClick(id)} class="delete-button">delete</button>
		</div>
		);
}

export default Card;