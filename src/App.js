import React, { Component } from 'react'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

import store from './redux'
import {Provider} from 'react-redux'

import './App.css'
import Header from "./Header";

class App extends Component {
  // async componentDidMount() {
  //   let token = localStorage.getItem('token')
  //   if (!token) {
	 //    const login = await axios.post('http://localhost:3001/users/login', {
		//     email: 'tuliofaria@devpleno.com',
		//     passwd: 'abc123'
	 //    })
	 //    const {token} = login.data
	 //    localStorage.setItem('token', token)
  //   }
  //   const decoded = jwtDecode(token)
  //   console.log(decoded)
  //
  //   const user = await axios.get('http://localhost:3001/users/me', {
  //     headers: {
  //       Authorization: 'Bearer '+ token
  //     }
  //   })
  //   console.log(user)
  // }

	render() {
    return (
      <Provider store={store}>
	      <div className="App">
		      <Header/>
		      <p className="App-intro">
			      To get started, edit <code>src/App.js</code> and save to reload.
		      </p>
	      </div>
      </Provider>
    );
  }
}

export default App;
