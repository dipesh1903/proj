import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { configureStore} from '@reduxjs/toolkit'

import App  from './containers/App'

import rootReducer from './slices/index'

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
})


render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
)
