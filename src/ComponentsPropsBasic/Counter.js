import React ,{Component} from 'react'

class Counter extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
        this.changeMe=this.changeMe.bind(this);
    }

    changeMe(){
        this.setState((prevState)=>
        ({count:prevState.count+1}
            )
        )
    }

    Increment(){
        this.changeMe();
        this.changeMe();
        this.changeMe();

    }
    render(){
        return(
            <>
                <h1>count : {this.state.count}</h1>
                <button onClick={this.changeMe}>Increment</button>
                {/* <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button> */}
            
            </>
                
        )
    }

}

export default Counter