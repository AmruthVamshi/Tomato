import React from 'react'

class SearchResults extends React.Component{
    state={
        searchRes:[],
    }
   componentDidMount(){
    let searchValue=this.props.location.pathname.slice(8)
        setTimeout(()=>{
            let url=`https://developers.zomato.com/api/v2.1/search?q=${searchValue}&order=asc`
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
                        <div className="restaurant collection-item card" key={restaurant.restaurant.R.res_id}>
                            <img src={restaurant.restaurant.featured_image} className='right' style={{height:'6em', width:'auto'}} alt=""/>
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
                    searchRes: restaurants,
                    search: searchValue
                })
            })
            },10);
        }
        componentDidUpdate = (prevProps) => {
            if(this.props.location.pathname.slice(8) !== prevProps.location.pathname.slice(8) ) {
                let currentSearchValue=this.props.location.pathname.slice(8)
                setTimeout(()=>{
                    let url=`https://developers.zomato.com/api/v2.1/search?q=${currentSearchValue}&order=asc`
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
                                <div className="restaurant collection-item card" key={restaurant.restaurant.R.res_id}>
                                    <img src={restaurant.restaurant.featured_image} className='right' style={{height:'100px', width:'auto'}} alt=""/>
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
                            searchRes: restaurants,
                            search: currentSearchValue
                        })
                    })
                    },10);
              
           };
          };
 
render(){
    var render_restaurant_data=(this.state.searchRes!=='')?(
        <div className="collection">{this.state.searchRes}</div>
    ):(<div className='fetching'> <p>Fetching nearby restaurants!!.......</p> </div>)

    if(render_restaurant_data.props.children!==undefined){
        if(render_restaurant_data.props.children.length===0){
            render_restaurant_data=<p>unable to fetch desired retaurants! :( Try enabling the location and reload !! </p>
        }
    }
    return(
        <div className="container">
            <h5>Showing results for <span style={{color:'blue'}}>{this.state.search}</span></h5>
            {render_restaurant_data}
        </div>
    )
}
}

export default SearchResults;