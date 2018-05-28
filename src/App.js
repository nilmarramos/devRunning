import React, { Component } from 'react'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

import logo from './logo.svg'
import './App.css'

class App extends Component {
  async componentDidMount() {
    let token = localStorage.getItem('token')
    if (!token) {
	    const login = await axios.post('http://localhost:3001/users/login', {
		    email: 'tuliofaria@devpleno.com',
		    passwd: 'abc123'
	    })
	    const {token} = login.data
	    localStorage.setItem('token', token)
    }
    const decoded = jwtDecode(token)
    console.log(decoded)
  }

	render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
