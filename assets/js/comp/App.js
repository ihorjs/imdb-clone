import React, { Component} from 'react';
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import ReactDOM from 'react-dom';
import {setCurrentUser, logoutUser} from './actions/authActions';
import {Provider} from 'react-redux';
import store from './store';
import { getCurrentProfile, clearCurrentProfile } from './actions/profileActions';

import PrivateRoute from '../comp/common/PrivateRoute'
import PropTypes from 'prop-types';

// import Header from './pages/Header'
import moviesData from '../moviesData';
import Register from './auth/Register';
import Login from './auth/Login';
import MovieSection from './pages/MovieSection';
import ProfilePage from './pages/ProfilePage';
import CreateProfile from '../comp/create-profile/CreateProfile'
import EditProfile from '../comp/edit-profile/EditProfile'
import MovieProfile from '../comp/pages/movie-profile/MovieProfile'


//Check for token
if(localStorage.jwtToken){
  //Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and expiration
  const decoded = jwtDecode(localStorage.jwtToken);
  //Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded))
 
 //Check for expired token
 const currentTime = Date.now() / 1000;
 if(decoded.exp < currentTime){
  //Logout user
  store.dispatch(logoutUser())
  //clear current profile
  store.dispatch(clearCurrentProfile())
  //Redirect to login
  window.location.href = '/';

 }

}



class App extends Component {
  constructor () {
    super()
    this.state = {
     
    }
  }

  

 

  
  render () {
    return (
      <Provider store={store}>
          <BrowserRouter>
              <div>
              
                  <Route exact path='/' component = {MovieSection} />
                  <Route exact path= '/register' component={Register} />
                  <Route exact path='/login' component={Login} />


                  <Switch>
                  <PrivateRoute exact path='/profilepage' component={ProfilePage} />
                  </Switch>
                  <Switch>
                  <PrivateRoute exact path='/create-profile' component={CreateProfile} />
                  </Switch>
                  <Switch>
                  <PrivateRoute exact path='/edit-profile' component={EditProfile} />
                  </Switch>
                  <Switch>
                  <Route exact path='/moviepath/:movieName' component={MovieProfile} />

                  </Switch>
                  
                  
              </div>
        </BrowserRouter>
      </Provider>
    )
  }
}



const app = document.getElementById('app')

ReactDOM.render(<App />, app)
