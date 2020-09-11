const initialState = {
    popup: false,
    islogin: false,
    isLoading: false,
    user: {},
    notes: []
}

const reducer = (state=initialState, action) => {
    if(action.type === 'CHANGE-POPUP') {
    return {
        ...state,
        popup: action.value
        }
    }
    if(action.type === 'CHANGE_ISLOGIN') {
    return {
        ...state,
        islogin: action.value
        }
    }
    if(action.type === 'CHANGE_USER') {
    return {
        ...state,
        user: action.value
        }
    }
    if(action.type === 'CHANGE_LOADING') {
    return {
        ...state,
        isLoading: action.value
        }
    }
    if(action.type === 'SET_NOTES') {
    return {
        ...state,
        notes: action.value
        }
    }
    return state;
}

export default reducer;