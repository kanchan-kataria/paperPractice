import React ,{Component} from 'react'
import axios from 'axios'
class LifeCycle extends Component{
    constructor(props){
        super(props)
        this.state={
            posts:[],
            id:null
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            console.log(res);
            this.setState({posts:res.data})
            }
            )
        .catch(err=>{
            console.log(err)
        })
    }

    componentDidUpdate(prevProps,prevState){
        
        if(prevState.id !== this.state.id && this.state.id !== null){
            axios.get(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`)
            .then(res=>{
                console.log(res);
                this.setState({posts:[res.data]})
                }
                )
            .catch(err=>{
                console.log(err)
            })
        }

    }

    render(){
        return(
            <>
                <input type='text' value={this.state.id} onChange={(e)=>this.setState({id:Number(e.target.value)})}/>
                {this.state.posts.map(items=><li>{items.title}</li>)}
            
            </>
        )
    }
}

export default LifeCycle;