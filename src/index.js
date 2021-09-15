import React from  'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import multi from 'redux-multi'
import promise from 'redux-promise'
import thunk from 'redux-thunk'

import AuthOrApp from './main/authOrApp'
import reducers from './main/reducers'

import Routes from './main/routes'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(promise, multi, thunk)(createStore)(reducers, devTools)
ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>, 
    document.getElementById('app'))