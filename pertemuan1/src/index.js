import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './container/Home/Home';
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';
// import rootReducer from './redux/reducer/globalreducer';

// // Store
// const storeRedux = createStore(rootReducer);
// // console.log('saya'storeRedux(rootReducer));

// ReactDOM.render(<Provider store={storeRedux}><Home /></Provider>  ,document.getElementById('root'));
ReactDOM.render(<Home /> ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
