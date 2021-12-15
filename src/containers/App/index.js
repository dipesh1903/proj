import React , {useEffect , useState} from 'react';
import Card from '../../components/Card/index.js';
import { useSelector, useDispatch } from 'react-redux';
import {fetchListData , deleteListData , editListData} from '../../slices/List.js';
import './style.scss';


const App = (props) => {

	const listData = useSelector(state => state.listDataReducer.listData);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchListData())
	},[])

	const onClickHandler = (id) => {
		console.log(id);
		dispatch(deleteListData(id));
	}

	const onEditHandler = (data) => {
		console.log(data)
		dispatch(editListData(data));
	}

	return (
			<div class="main">
				{
					listData && listData.map((item , index) => {
						return (
								<Card key={item.id} data = {item} onEdit={onEditHandler} onClick = {onClickHandler}/>
							)
					})
				}
			</div>
		)
}

export default App;

