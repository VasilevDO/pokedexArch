import {createStore} from 'redux'


const defaultState= {
    cash:0,
}

const reducer =(state=defaultState, action)=>{
    switch (action.type) {
        case 'ADD_CASH':
          return {...state, cash: state.cash+action.payload}
        case 'GET_CASH':
            return {...state, cash: state.cash-action.payload}

        default:
            return state
    }
}

const store = createStore(reducer)

export default store;
