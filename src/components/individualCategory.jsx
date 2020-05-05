import React from 'react'
import CategoryRes from './categoryRes';

var IndividualCategory = (props)=>{
        return(
            <div className="individualCategory">
            <div className='container row'>
            <div className=''><CategoryRes id={props.match.params.id}/></div>
            </div>  
          </div>
        )
}

export default IndividualCategory;