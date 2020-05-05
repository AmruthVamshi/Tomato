const REQUESTING_DATA='REQUESTING_DATA';
const RECEIVED_DATA='RECEIVED_DATA';

const requestingData=()=>{
    return {
        type:REQUESTING_DATA,
        location:null
    }
}

const receivedData=(location,response)=>{
    return {
        type:RECEIVED_DATA,
        location:location,
        response:response
    }
}

const getLocation=()=>{
    return (dispatch)=>{
        dispatch(requestingData);
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((pos)=>{
                let loc =[pos.coords.latitude,pos.coords.longitude]
                dispatch(receivedData(loc,'Success'));
            });
        }else{
            dispatch(receivedData(null,'failure'));
        }
    }
}

export default getLocation;