import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class Categories extends Component{
    state={
        categories : [],
    }
    componentDidMount(){
        let url=`https://developers.zomato.com/api/v2.1/categories`
        let options = {
            headers:{
                accept:'Application/json',
                'user-key':'45c405f129c8f69ce406e7a22830051c',
            }
        }
        fetch(url,options).then(res=>{return res.json()})
        .then((response)=>{
            var cat=response.categories.map((ind_cat)=>{
                return(
                <li className="categorie collection-item" key={ind_cat.categories.id}><Link to={`/categories/${ind_cat.categories.id}`}>{ind_cat.categories.name}</Link></li>
                )
            })
            var catMobile=response.categories.map((ind_cat)=>{
                return(
                <li key={ind_cat.categories.id}><Link to={`/categories/${ind_cat.categories.id}`}>{ind_cat.categories.name}</Link></li>
                )
            })
            this.setState(()=>{
                return ({categoriesDesktop: cat,categoriesMobile: catMobile})
            })
        })
    }
    render(){
        var mobileView=
            <div className='mobile-home'>
                <ul id="dropdown1" className="dropdown-content collection">
                    <li className="divider"></li>
                    <li><b>Categories</b></li>
                    <li className="divider"></li>
                    {this.state.categoriesMobile}    
                </ul>
                <a className="dropdown-trigger btn dropdown-button red lighten-1" href="#!" data-target="dropdown1" style={{width:'100%'}}>Categories<i className="material-icons center">arrow_drop_down</i></a>
            </div>
        var desktopView=
            <div className='desktop-home'>
                <h5>Categories</h5>
                <ul className="categories collection">
                {this.state.categoriesDesktop}
                </ul>
            </div>
        
        return(
            <div>
                {mobileView}
                {desktopView}
            </div>            
        )
    }
}

export default Categories