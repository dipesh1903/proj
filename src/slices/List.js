import { createSlice, PayloadAction , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

import {LIST_DATA_API} from '../api/index.js';
import {LIST_DATA_LOCALSTORAGE_KEY} from '../utils/constants.js';

const initialState = {
	listData : localStorage.getItem(LIST_DATA_LOCALSTORAGE_KEY) ? JSON.parse(localStorage.getItem(LIST_DATA_LOCALSTORAGE_KEY)) : null,
	loading : false,
	error: null
}

export const fetchListData = createAsyncThunk('listData/fetchListData' , async () => {
	let data;
	try {
		data = await axios(LIST_DATA_API);

		console.log(data)
		
		return data.data;

	} catch (error) {
		return error;
	}
})


const listDataSlice = createSlice({
	name: 'listData',
	initialState,
	reducers:{
		deleteListData : (state , {payload}) => {
			console.log(payload);
			let newData = state.listData.filter((item , index) => item.id !== payload);
			state.listData = newData;
			localStorage.setItem(LIST_DATA_LOCALSTORAGE_KEY , JSON.stringify(newData));
		}
	},
	extraReducers(builder) {
		builder
		.addCase(fetchListData.pending , (state , action) => {
			state.loading = true
			state.error = null
		})
		.addCase(fetchListData.fulfilled , (state , action) => {
			state.loading = false
			state.error = null
			console.log(action);
			localStorage.setItem(LIST_DATA_LOCALSTORAGE_KEY , JSON.stringify(action.payload.data));
			state.listData = action.payload.data;
		})
		.addCase(fetchListData.rejected , (state , action) => {
			state.loading = false;
			state.error = 'Failed loading the data'
		})
	}

})

export const {deleteListData} = listDataSlice.actions;

export default listDataSlice.reducer