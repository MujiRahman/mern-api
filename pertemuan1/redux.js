const redux = require('redux');
const createStore = redux.createStore;

// const initialState = {
//     value: 0
// }

// Reducer
const rootReducer = (state, action) => {
    return state;
}

// Store
const store = createStore(rootReducer);
console.log(store.getstate());

// Dispatching Action

// Subscription