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
}


const reducer = (state=initialstate, action) => {
    switch(action.type){
        case REQUEST_USER_DATA + '_FULFILLED': 
            const {email, firstName, lastName} = action.payload.user
            return {
                email,
                firstName,
                lastName
            }
        

        default: return state;
    }

}

export default reducer;