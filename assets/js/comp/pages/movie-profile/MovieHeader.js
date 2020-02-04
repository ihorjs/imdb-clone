import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import moviesData from '../../../moviesData'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logoutUser} from '../../actions/authActions'
import {clearCurrentProfile} from '../../actions/profileActions'
 class MovieHeader extends Component {
  constructor () {
    super()
    this.state = {
     
    }
  }

 

  onLogoutClick(e){
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }
 
  render () {
    const {isAuthenticated, user} = this.props.auth;


    const authLinks = (
      <ul className="rightInfo">
          <li className="oneAuth"><a>Movies</a></li>
          <li className="twoAuth">
          <a>TV Shows</a>
          </li>
          <li className="linkButton">
          
           <img
           className="rounded-circle"
           src={user.avatar}
           alt={user.name}

           style={{width: '25px', marginRight: '5px'}}
           title="You must have a Gravatar connected to your email to display an image"
           />
           
           <ul className="sub-menu">
              <li className="sub-link">
              <Link to="profilepage">{user.name}</Link>
              </li>
              <li className="sub-link-two">
              <a onClick={this.onLogoutClick.bind(this)} 
              >Logout</a>
              </li>
              
           </ul>
           
          
          </li>
          <hr />
         
      </ul>
     

      
    )

  const guestLinks = (
    <ul className="rightInfo">
        <li className="one"><a  onClick ={this.hitButton}>Movies</a>
        </li>
        <li className="two">
        <a>TV Shows</a>
        </li>
        <li className="three">
          <Link to="/login" className="linkButton">Login</Link>
        </li>
        <li className="four">
          <Link to="/register" className="linkButton">Register</Link>
        </li>
        <hr />
  </ul>
    
  )

    return (<div>
          
          <div className="navbar">
            <Link to="/" className="compName">
            
              Moviizz
            </Link>
            <div className="rightArea">
              {isAuthenticated ? authLinks : guestLinks}
            
            </div>
          </div>
          
        

    </div>)
  }
}

MovieHeader.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}


const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, {logoutUser, clearCurrentProfile})(MovieHeader);