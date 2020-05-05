import React from 'react'
import Slider from './slider.jsx';



class individualRestaurant extends React.Component{
    state={
        images:''
    }

    componentDidMount(){

        setTimeout(() => {
            let url=`https://developers.zomato.com/api/v2.1/restaurant?res_id=${this.props.location.pathname.slice(12)}`
            let options = {
            headers:{
                accept:'Application/json',
                'user-key':'45c405f129c8f69ce406e7a22830051c',
            }
        }
        fetch(url,options).then((res)=> res.json())
        .then(response=>{
            let photos=response.photos.map((pic,i)=>{
                return(
                    <div className="carousel-item" key={i}><div className='image-box'><img alt='' className='car-img' src={`${pic.photo.url}`}/></div></div>
                    )
                })
            let data=(resdata)=>{
                return(
                    <div className='res-info'>
                        <div className='res-head row'>
                        <h2 className='col m6'>{resdata.name}</h2>
                        <div className='col m6'>
                            <p className='rating' style={{backgroundColor:`#${resdata.user_rating.rating_color}`}}>{resdata.user_rating.aggregate_rating}
                                {resdata.user_rating.rating_text}</p>
                        </div>
                        </div>
                    </div>
                )
            }
            let resdata=(resdata)=>{
                return(
                    <div className='res-body'>
                        <p><b>Cusines Available</b> : {resdata.cuisines}</p>
                        <p><b>Restaurant address</b> : {resdata.location.address}</p>
                        <p><b>Average cost for 2</b> : {resdata.currency}{resdata.average_cost_for_two}</p>
                    </div>
                )
            }
            var head=data(response)
            var info=resdata(response)
            this.setState({images:photos,head:head,resdata:info})
        })
        }, 10);
    }
    render(){
        var slide=(this.state.images==='')?(<p>loading images....</p>):(<Slider images={this.state.images}/>)
        return(
            <div className='res-data container'>
                {this.state.head}
                <div className='img-slide'>{slide}</div>
                {this.state.resdata}
            </div>
        )
    }
}

export default individualRestaurant 
