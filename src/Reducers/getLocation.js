const initState={
    location:[],
}

const REQUESTING_DATA='REQUESTING_DATA';
const RECEIVED_DATA='RECEIVED_DATA';

const getLocationReducer=(state=initState,action)=>{
    switch(action.type){
        case REQUESTING_DATA:
            console.log('requesting data');
            return {
                location:action.location,
                text:'Fetching location'
            }
        case RECEIVED_DATA:
            return {
                location:action.location,
                response:action.response,
            } 
        default:
            return state;
    }
}

export default getLocationReducer;