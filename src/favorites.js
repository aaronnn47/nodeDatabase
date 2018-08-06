import React, { Component } from 'react'
import axios from 'axios'
import Display from './display'

class Favorites extends Component {
    constructor() {
        super()

        this.state = {
            favorites: [],
            input: ''
        }
        this.deletePost = this.deletePost.bind(this)
    }

    componentDidMount() {
        this.getServer()
    }

    getServer() {
        // console.log('get server')
        axios
            .get(`/api/bitcoin`)
            .then(res => {
                // console.log(res)
                this.setState({ favorites: res.data })
            })
    }
    createPost(){
        axios
        .post('/api/bitcoin',{name: this.props.name})
        .then(res=>{
            this.setState({favorites:res.data})
        })
    }
    updatePost(id,text){
        // console.log('hitting post')
        axios.put(`./api/bitcoin/${id}`,{text})
        .then(res=>{
            // console.log(res)
            this.setState({favorites:res.data})
        })
    
    }

    deletePost(obj){
        axios.delete(`/api/bitcoin/${obj}`)
        .then(res=>{
            this.setState({favorites:res.data})
        })
    }
    handleChange(e){
        this.setState({input:e.target.value})
    }


    render() {
        // console.log(this.props.bitcoin)
        // console.log(this.state.favorites)

        let favs = this.state.favorites.map((ele,id)=>{
            return (
                <div>
                    <div key={id}>{ele.name}</div>
                    <div >{ele.symbol}</div>
                <button 
                onClick={()=> this.deletePost(ele.id)}>delete</button>
                
                
                <button 
                onClick={()=>this.updatePost(ele.id,this.state.input)}
                >Update</button>

                <input onChange={(e)=>this.handleChange(e)}type="text"/>

                </div>
            )

            })

        return (
            <div>
                <button
                onClick={() => { this.createPost(this.props.bitcoin) }}
                >Add To Favorites
                </button>
                
                {favs}          
            </div>
        )
    }




}
export default Favorites