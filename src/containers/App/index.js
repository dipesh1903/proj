import React , {useEffect , useState} from 'react';
import Card from '../../components/Card/index.js';
import { useSelector, useDispatch } from 'react-redux';
import {fetchListData , deleteListData} from '../../slices/List.js';
import './style.css';


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


	return (
			<div class="main">
				{
					listData && listData.map((item , index) => {
						return (
								<Card key={item.id} data = {item} onClick = {onClickHandler}/>
							)
					})
				}
			</div>
		)
}

export default App;

