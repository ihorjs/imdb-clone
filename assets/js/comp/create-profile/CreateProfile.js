import React, { Component } from 'react'
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup'
import TextAreaFieldGroup from '../common/TextAreaFieldGroup'
import SelectListGroup from '../common/SelectListGroup'
import {createProfile} from '../actions/profileActions'

class CreateProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      handle: '',
      location: '',
      bio: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      this.setState({errors: nextProps.errors})
    }
  }

    onSubmit(e){
      e.preventDefault();

      const profileData = {
        handle: this.state.handle,
        location: this.state.location,
        bio: this.state.bio
      }
      this.props.createProfile(profileData, this.props.history)
    }

    onChange(e){
      this.setState({[e.target.name]: e.target.value})
    }



  render() {
    const { errors } = this.state;
    return (<div className="row">
      <div className="create-background col-xs-12">
      <div className="create-profile center-xs">
        <Link to="/" className="display-4 ">Movizz</Link>

        <h1 className="createProfileTitle">Create your profile</h1>
        <p className="createProfileInfo">Lets get some information for your profile</p>
      
          
        <div className="row center-xs">
          <div className="display-3">

            <form onSubmit={this.onSubmit}>

              <div className="all-forms">
                <h1 className="display-6 start-xs">Handle</h1>
                 <TextFieldGroup
                  name="handle"
                  
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                  info="A unique handle for your profile URL."
                  />
                  <h1 className="display-6 start-xs">Location</h1>
                  <TextFieldGroup
                  name="location"
                  
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                  />
                  <h1 className="display-6 start-xs">Bio</h1>
                  <TextAreaFieldGroup
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                  />


            
                  
              
              
              <input 
              type="submit"
              className="btn btn-block" />
              </div>
            </form>
          </div>
        </div>
      
    </div>
      
 </div>
</div>)
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
})

export default connect(mapStateToProps, {createProfile})(withRouter(CreateProfile));