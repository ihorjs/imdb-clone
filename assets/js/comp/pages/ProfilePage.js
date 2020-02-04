import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import {getCurrentProfile, deleteAccount} from '../actions/profileActions'
import Header from './Header'
import { Link } from 'react-router-dom';
import ProfileActions from './profileActions';

class ProfilePage extends Component {
  componentDidMount(){
    this.props.getCurrentProfile();
  }
  
  onDeleteClick(e){
    this.props.deleteAccount()
  }

  render() {
    const {user} = this.props.auth;
    const {profile, loading} = this.props.profile;

    let profilePageContent;

    if(profile === null || loading){
      profilePageContent = <h4>Loading...</h4>
    }else{
      if(Object.keys(profile).length > 0){
        profilePageContent = (
          <div  className="profileData">
            <p className="profileInfoName">Welcome <span className="editHandle">{user.name}</span></p>
            <ProfileActions />
            {/* Todo: exp and edu */}
            
            <button onClick={this.onDeleteClick.bind(this)} className="deleteProfileButton">Delete My Account</button>
          </div>
        )
      }else{
        //User is logged in but has no profile
        profilePageContent = (
            <div className="profileData">
              <p className="profileInfoName">Welcome {user.name}</p>
              <p className="profileWarning">There is no info in your profile yet.</p>  
              <Link to = "/create-profile" className="createProfileButton">
              Create Profile
              </Link>
            </div>
        )

      }
    }

    return (
      <div className="profilePage">
       <header className="profile-head">
       <Header />
       </header>
       <section className="profile-information">
        {profilePageContent}
        <div className=" profile-items">

        <div className="likes-profile">
          <h1 className="profileListTitle">Movies you like</h1>
        </div>

        <div className="reviews-profile">
          <h1 className="profileListTitle">Reviews</h1>
        </div>
        </div>
       </section>
        
        
      </div>
    )
  }
}

ProfilePage.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});



export default connect(mapStateToProps, {getCurrentProfile, deleteAccount})(ProfilePage);