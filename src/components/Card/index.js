import React , {useState} from 'react'
import './style.scss';

const Card = (props) => {

	const {last_name , first_name , email , avatar , id} = props.data;

	const [isEdit , setisEdit] = useState(false);
	const [buttonFunc , setButtonFunc] = useState('edit');

	const [firstName , setFirstName] = useState(() => {
		return first_name
	})
	const [lastName , setLastName] = useState(() => {
		return last_name
	})
	const [inpEmail , setEmail] = useState(() => {
		return email
	})

	const handleEdit = (e) => {
		if(!isEdit && buttonFunc === 'edit') {
			setisEdit(true);
			setButtonFunc('add');
		} else {
			const data = {
				...props.data,
				first_name : firstName,
				last_name : lastName,
				email : inpEmail
			}
			props.onEdit(data);
			setButtonFunc('edit');
			setisEdit(false);
		}
	}

	return (
		<div className="card">
		  <img src={avatar} alt={first_name} />
		  <div className="container">
		    <div className = "names">
		    	{!isEdit ? <div className="padding-right">{first_name}</div> : <input className="padding-right" type="text" value = {firstName} onChange = {(e) => setFirstName(e.target.value)}/>}
		    	{!isEdit ? <div >{last_name}</div> : <input type="text" value = {lastName} onChange = {(e) => setLastName(e.target.value)}/>}
		    </div>
		    {!isEdit ? <div>{email}</div> : <input type="text" value = {inpEmail} onChange = {(e) => setEmail(e.target.value)}/>}
		  </div>
		  <div className="buttons">
		  	<button onClick={() => props.onClick(id)} className="delete-button" >delete</button>
		  	<button onClick={handleEdit} className="delete-button">{
		  		!isEdit ? 'Edit' : 'Add'
		  	}</button>
		  </div>
		  
		</div>
		);
}

export default Card;