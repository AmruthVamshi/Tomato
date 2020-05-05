import {combineReducers} from 'redux';
import getLocationReducer from './getLocation';

const initState={
    location:'this is the location!!',
};

const Reducer=(state=initState,action)=>{
    return state;
}

const rootReducer=combineReducers({reducer:Reducer,getLocation:getLocationReducer})

export default rootReducer;
