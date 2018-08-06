import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Header from './Header'
import Favorites from './favorites';

class App extends Component {
  constructor() {
    super()

    this.state = {
      crypto_data: [],
      price: '',
      symbol: '',
      name: '',
      input: 'Bitcoin',
      currentValue: ''
    }
  }

  componentDidMount() {
    this.requestCryptoData()
    this.getCurrentValue()
  }

  requestCryptoData() {
    axios
      .get(`https://api.coinmarketcap.com/v2/ticker/?start=1&limit=100&sort=id&structure=array`)
      .then(res => {
        // console.log(res.data.data)
        let coins= res.data.data;
        let coin = coins.filter(ele=>ele.name===this.state.input)[0]
        // console.log(coin)
        this.setState({
          name:coin.name,
          symbol:coin.symbol,
          price:coin.quotes.USD.price
        })
      
    }
  )
}        
  handleChange(val) {
    this.setState({ input: val })
  }

  getCurrentValue(){
    setInterval(()=>{
      axios.get(`https://api.coinmarketcap.com/v2/ticker/1/`)
      .then(res=>{
        // console.log(res.data.data.quotes.USD.price)
        this.setState({currentValue:res.data.data.quotes.USD.price})
      })

  },5000)

  }

  render() {
    console.log(this.state.name)
    
  return (
      <div className="App">
        <nav className="nav">
        <Header ticker={Math.round(this.state.currentValue*100)/100}/>
        </nav>        

        <div className="display">
          <div>{this.state.name}</div>
          <div>{Math.round(this.state.price * 100)/100}</div>
          <div>{this.state.symbol}</div>
          <Favorites name={this.state.name} price={this.state.price} symbol={this.state.price}/>
          
        </div>
        
        
        <div className="parent">
          {/* <Input input={this.state.input}/> */}
          <input 
          onChange={(e)=> this.handleChange(e.target.value)} />
          <br/>
          <button onClick={()=>{this.requestCryptoData()}}>Get Coin</button>
        </div>

        <div className="footer"></div>
      </div>
    );
  }
}

export default App;
