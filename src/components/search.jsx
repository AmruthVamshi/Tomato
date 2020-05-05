import React from 'react'
import {withRouter} from 'react-router'

class Search extends React.Component{
    state={searchValue:''}
    handleSubmit=(e)=>{
        this.props.history.push(`/search/${this.state.searchValue}`)
    }
    componentDidUpdate=()=>{
        let input=document.getElementById('searchInput');
        input.value=''
    }
    render(){
        return(
            <div id='form'>
            <form onSubmit={(e)=>{e.preventDefault();this.handleSubmit(e)}}>
                <input type='text' placeholder='Search' id='searchInput' value={this.state.searchValue} onChange={e=>{this.setState({searchValue:e.target.value})}}/>
            </form>
            </div>
        )
    }
}

export default withRouter(Search)