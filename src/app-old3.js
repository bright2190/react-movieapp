import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Register from "./Components/Register/Register";
import User from "./Components/User/User";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import EmailContact from "./Components/EmailContact/EmailContact";
import PhoneContact from "./Components/PhoneContact/PhoneContact";
import Nav from "./Components/Nav/Nav";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

class App extends React.Component{

    constructor(){
      super()

      this.state = {
        show_nav_bar: true
      }

      console.log("Constructor called ...")

    }

    accessPageNotFound = () => {
        this.setState({
          show_nav_bar: false
        })
    }

    componentDidMount(){
      //  api request
      console.log("Compnent mounted ...")
      //check whatever I want to check
    }



    componentDidUpdate(){
      console.log("Compnent updated ...")
      console.log(this.state.show_nav_bar)
      
    }

    componentWillUnmount(){
      console.log("Compnent unmounted ...")
    }


    render(){
      console.log("Compnent rendered ...")
      this.showNavBar = this.state.show_nav_bar == true ?  <Nav /> : <></>
        return (
          <>
            {this.showNavBar}
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about-us' element={<About/>} />
              <Route path='/contact-us' element={<Contact/>}>
                <Route path='email' element={<EmailContact />}/>
                <Route path='phone' element={<PhoneContact />}/>
              </Route>
              <Route path='/user/:userid' element={<User />}/>
              <Route path='/register' element={<Register />}/>
              <Route path='*' element={<PageNotFound showNavProp={this.accessPageNotFound}/>}/>
            </Routes>
          </>
          
        )
    }



}


export default App;