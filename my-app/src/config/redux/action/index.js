import firebase, {database} from '../../firebase'


export const actionUserName = () => (dispatch) => {
    setTimeout(() => {
        return dispatch({type: 'CHANGE_USER', value: 'muji rahman sayuti'})
    }, 2000)
}

export const registerUserAPI = (data) => (dispatch) => {
    return new Promise ((resolve, reject) => {
        dispatch({type: 'CHANGE_LOADING',value: true})
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        .then(res => {console.log('isi res =', res);
        dispatch({type: 'CHANGE_LOADING',value: false})
        })
        resolve(true)
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
            dispatch({type: 'CHANGE_LOADING',value: false})
            reject(false)
            // ...
        })  
    })
}

export const loginUserAPI = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch({type: 'CHANGE_LOADING',value: true})
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        .then(res => {console.log('isi success =', res);
        const dataUser = {
            email: res.user.email,
            uid: res.user.uid,
            emailVerified: res.user.emailVerified,
            refresToken: res.user.refreshToken
        }
        dispatch({type: 'CHANGE_LOADING',value: false})
        dispatch({type: 'CHANGE_ISLOGIN',value: true})
        dispatch({type: 'CHANGE_USER',value: dataUser})
        resolve(dataUser)
        })
        .catch(function(error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            dispatch({type: 'CHANGE_LOADING',value: false})
            dispatch({type: 'CHANGE_ISLOGIN',value: false})
            reject(false)
            // ...
        })
    })
}

export const addDataToAPI = (data) => (dispatch) => {
    database.ref( 'notes/' + data.userId).push({
        title: data.title,
        content: data.content,
        date: data.date
    })
}

export const getDataFromAPI = (userId) => (dispatch) => {
    const urlNotes = database.ref('notes/' + userId);
    return new Promise((resolve, reject) => {
        urlNotes.on('value', function(snapshot) {
            console.log('isi get data=', snapshot.val());
            const data = []
            Object.keys(snapshot.val()).map(key => {
                return(
                    data.push({
                        id: key,
                        data: snapshot.val()[key]
                    })
                )
            });
            dispatch({type: 'SET_NOTES', value: data})
            resolve(snapshot.val())
        });
    })
}
export const updateDataAPI = (data) => (dispatch) => {
    const urlNotes = database.ref(`notes/${data.userId}/${data.noteId}`);
    return new Promise((resolve, reject) => {
        urlNotes.set({
            title: data.title,
            content: data.content,
            date: data.date
        }, (err) => {
            if(err) {
                reject(false);
            } else {
                resolve(true);
            }
        });
    })
}


export const deleteDataAPI = (data) => (dispatch) => {
    const urlNotes = database.ref(`notes/${data.userId}/${data.noteId}`);
    return new Promise((resolve, reject) => {
        urlNotes.remove();
    })
}