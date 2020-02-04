import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {registerUser} from '../actions/authActions'
import TextFieldGroup from '../common/TextFieldGroup'

class Register extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      this.setState({errors: nextProps.errors})
    }
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit(e){
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2

    };

    this.props.registerUser(newUser, this.props.history)

  }
  

  render() {

    const {errors} = this.state;


    return (
      <div className="row">
          <div className="left-split col-xs-6">

          </div>
          <div className="right-split col-xs-6">
            <div className="registerForm">
          
            <div className="row center-xs">
              <div className="display-3">
              <Link to="/" className="display-4 ">Movizz</Link>

                <h1 className="display-5">Create account</h1>
                
                <form noValidate onSubmit={this.onSubmit}>
                  <div className="all-forms">
                  <h1 className="display-6 start-xs">Name</h1>
                    <TextFieldGroup
                     name="name"
                     value={this.state.name}
                     onChange={this.onChange}
                     error={errors.name}
                     />
                  
                     <h1 className="display-6 start-xs">Email</h1>
                    <TextFieldGroup
                     name="email"
                     type="email"
                     value={this.state.email}
                     onChange={this.onChange}
                     error={errors.email}
                     info="This site uses Gravatar, so if you want a profile picture use a Gravatar email"
                     />
                  
                     <h1 className="display-6 start-xs">Password</h1>
                     <TextFieldGroup
                      name="password"
                      type="password"
                      value={this.state.password}
                      onChange={this.onChange}
                      error={errors.password}
                      />

                     <h1 className="display-6 start-xs">Confirm password</h1>
                     <TextFieldGroup
                      name="password2"
                      type="password"
                      value={this.state.password2}
                      onChange={this.onChange}
                      error={errors.password2}
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
    </div>
       
      
    )
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}


const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, {registerUser})(withRouter(Register));
