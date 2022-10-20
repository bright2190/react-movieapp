import React from "react";
import './App.css';
import Buttons from "./Components/Buttons/Buttons";
import Results from "./Components/Results/Results"
import logo from './logo.svg';


class App extends React.Component{

    constructor(){
      super()

      this.state = {
        counter: 0
      }
    }

    sendEmail(){
      console.log('Email sent')
      console.log(this.state)
    }

    increaseCounter(whatever){
  
      this.setState((prevState, props) => ({
        counter: prevState.counter + 1
      }))

    }

    decreaseCounter(){
      this.setState((prevState) => ({
        counter: prevState.counter - 1 < 0 ? 0 : prevState.counter - 1
      }))
    }


    render(){

        return (
          <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />           
            <Results newCounterProp={this.state.counter}/>
            <Buttons increaseProp={(data) => this.increaseCounter(data)}  decreaseProp = {(data) => this.decreaseCounter(data)}/>
          </header>
        </div>
        )

    }



}

export default App