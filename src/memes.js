import React,{Component} from 'react'
import axios from 'axios'


class Memes extends Component {
    constructor(props){
        super(props)

        this.state = {
            meme_data: []
        }
    }

    componentDidMount(){
        axios.get(`https://api.imgflip.com/get_memes`)
        .then(res=>{
            this.setState({meme_data: res.data.data.memes})
        })
    }

    render(){
        console.log(this.state.meme_data)

        // let first = this.state.meme_data
        // console.log(first)


        // let memes = this.state.meme_data.map((meme,index) =>{
        //     return meme.url
            
        // })
        // console.log(memes)

        return(
            <div>
                
              first

            </div>
        )
    }

}

export default Memes