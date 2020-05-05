import React from 'react';
import '../css/slide.css'
class Slider extends React.Component{
    constructor(props){
        super(props);
        this.state={
            images:this.props.images,
            current:this.props.images[0],
        };
    }
    render(){
        var leftClick=()=>{
            const i=Number(this.state.current.key)-1;
            this.setState({current:this.state.images[i]})
        }
        var rightClick=()=>{
            const i=Number(this.state.current.key)+1;
            this.setState({current:this.state.images[i]})
        }
        return(
        <div className='slider'>
            {this.state.current}
            <button id='left-btn' onClick={()=>leftClick()} disabled={Number(this.state.current.key)===0}><i className='material-icons arrow'>chevron_left</i></button>
            <button id='right-btn'onClick={()=>rightClick()} disabled={Number(this.state.current.key)===this.state.images.length-1}><i className='material-icons arrow'>chevron_right</i></button>
        </div>
        )
    }
}
export default Slider;