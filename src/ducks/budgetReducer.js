import axios from 'axios';

const REQUEST_BUDGET_DATA = 'REQUEST_BUDGET_DATA';
const ADD_PURCHASE = 'ADD_PURCHASE';
const REMOVE_PURCHASE = 'REMOVE_PURCHASE';

const initialstate={
    purchases: [],
    budgetLimit: null,
    loading: false
}

export const requestBudgetData = () => {
    let data = axios.get('/api/budget-data')
        .then(( res ) =>{
            return res.data
        })
        return {
            type: REQUEST_BUDGET_DATA,
            payload: data
        }
}

export const addPurchase = (price, description, category) => {
    let data = axios.post('/api/budget-data/purchase', {
        price,
        description,
        category
    }).then(( res ) => {
        return res.data
    });
    return {
        type: ADD_PURCHASE,
        payload: data
    }
}

export const removePurchase = (id) => {
    let data = axios.delete(`/api/budget-data/purchase/${id}`)
        .then(( res ) => {
            return res.data
        })
        return {
            type: REMOVE_PURCHASE,
            payload: data
        }

}

const reducer = (state=initialstate, action) => {
    switch(action.type) {
        case `${REQUEST_BUDGET_DATA}_PENDING`: {
            return{
                ...state,
                loading: true
            }
        }

        case `${REQUEST_BUDGET_DATA}_FULFILLED`: {
            return{
                ...state,
                ...action.payload,
                loading: false
            }
        }

        case `${REQUEST_BUDGET_DATA}_REJECTED`: {
            return {
                ...state,
                loading: false
            }
        }

        case `${ADD_PURCHASE}_PENDING`: {
            return {
                ...state,
                loading: true
            }
        }

        case `${ADD_PURCHASE}_FULFILLED`: {
            return{
                ...state,
                ...action.payload,
                loading: false
            }
        }

        case `${ADD_PURCHASE}_REJECTED`: {
            return {
                ...state,
                loading: false
            }
        }

        case `${REMOVE_PURCHASE}_PENDING`: {
            return{
                ...state,
                loading: true
            }
        }

        case `${REMOVE_PURCHASE}_FULLFILLED`: {
            return {
                ...state,
                loading: false,
                purchases: action.payload
            }
        }

        case `${REMOVE_PURCHASE}_REJECTED`: {
            return {
                ...state,
                loading: false
            }
        }

        default: return state;
    }
}

export default reducer;