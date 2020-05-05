import React from 'react'
import {connect} from 'react-redux'
class CategoryRes extends React.Component {
    state = {}
    componentDidMount(){
        setTimeout(()=>{
            let currentLocation=this.props.LocationState.getLocation.location
            let url=`https://developers.zomato.com/api/v2.1/search?lat=${currentLocation[0]}&lon=${currentLocation[1]}&category=${this.props.id}`
            let options = {
            headers:{
                accept:'Application/json',
                'user-key':'45c405f129c8f69ce406e7a22830051c',
            }
        }
        fetch(url,options)
        .then(res=>{return (res.json())})
        .then(restaurants_response=>{
            let restaurants = restaurants_response.restaurants.map( restaurant => {
                return(
                    <div className="restaurant collection-item" key={restaurant.restaurant.R.res_id}>
                        <img src={restaurant.restaurant.featured_image} className='right'style={{height:'6em', width:'auto'}} alt=""/>
                        <a href={`/restaurant/${restaurant.restaurant.R.res_id}`}><h5 className='red-text darken-1'><i className="material-icons">restaurant</i>  {restaurant.restaurant.name}</h5></a>
                        <div>
                            <p className='rating-near' style={{backgroundColor:`#${restaurant.restaurant.user_rating.rating_color}`}}>{restaurant.restaurant.user_rating.aggregate_rating}&nbsp;
                            {restaurant.restaurant.user_rating.rating_text}</p>
                        </div>
                        <p>{restaurant.restaurant.cuisines}</p>
                        <p>{restaurant.restaurant.location.address}</p>
                    </div>   
                );
            })
            this.setState({
                nearbyRestaurants : restaurants,
            })
        })
        },1000)   
    }
    render(){
        var render_restaurant_data=(this.state.nearbyRestaurants)?(
            <div className="collection">{this.state.nearbyRestaurants}</div>
        ):(<div className='fetching'> <p>Fetching nearby restaurants!!.......</p> </div>)
    
        if(render_restaurant_data.props.children.length===0){
            render_restaurant_data=<p>unable to fetch desired retaurants! :( </p>
        }

        return(
            <div className="location">
                <h5>Restaurants near your location</h5>
                {render_restaurant_data}
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        LocationState:state
    }
}
export default connect(mapStateToProps)(CategoryRes);