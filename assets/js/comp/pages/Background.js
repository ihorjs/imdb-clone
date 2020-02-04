import React, { Component } from 'react'
import Header from './Header'

 class Background extends Component {
  render() {
    return (
      <header className="head">
      <Header/>

      <div className=" movieTitle">
       <h3>Blade Runner 2049</h3>
      </div>  
      </header>
    )
  }
}

export default Background;
