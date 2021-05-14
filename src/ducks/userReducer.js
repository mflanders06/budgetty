import axios from 'axios';

const initialstate = {
    email: null,
    firstName: null,
    lastName: null
}

const REQUEST_USER_DATA = 'REQUEST_USER_DATA';

export const requestUserData = () => {
    let data = axios.get('/auth/user-data')
        .then((res) => {
            return res.data
          })
        return {
            type: REQUEST_USER_DATA,
            payload: data
        }
        .catch((e) => console.log(e))
}


const reducer = (state=initialstate, action) => {
    return state;
}

export default reducer;