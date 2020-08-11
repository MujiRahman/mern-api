import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './container/Home/Home';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const globalState = {
    totalOrder: 0
}

// Reducer
const rootReducer =(state = globalState, action) => {
    if(action.type ==='PLUS_ORDER'){
        return {
            ...state,
            totalOrder: state.totalOrder + 1
        }
    }
    if(action.type === 'MINUS_ORDER') {
        let totalOrder = 0;
        if(state.totalOrder > 0) {
            totalOrder = state.totalOrder - 1
        }
        return {
            ...state,
            totalOrder: totalOrder
        }
    }
    return state;
}

// Store
const storeRedux = createStore(rootReducer);
// console.log('saya'storeRedux(rootReducer));

ReactDOM.render(<Provider store={storeRedux}><Home /></Provider>  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
