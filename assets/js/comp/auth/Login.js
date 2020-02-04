import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import classnames from 'classnames';

import {loginUser} from '../actions/authActions';
import ReactDOM from 'react-dom'
import TextFieldGroup from '../common/TextFieldGroup'; 
import { Link } from 'react-router-dom';


 class Login extends Component {
  constructor(){
    super();
    this.state = {
     
      email: '',
      password: '',
     
      errors: {}
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount(){
    if(this.props.auth.isAuthenticated){
      this.props.history.push('/');
    }
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.auth.isAuthenticated){
      this.props.history.push('/');
    }

    if(nextProps.errors){
      this.setState({errors: nextProps.errors})
    }
  }

  onSubmit(e){
    e.preventDefault();
    const userData = {
     
      email: this.state.email,
      password: this.state.password,
      

    }
    this.props.loginUser(userData);
  }

  render() {
    const {errors} = this.state;
    return (
        <div className="row">
          <div className="left-split col-xs-6">

          </div>
          <div className="right-split col-xs-6">
          <div className="loginForm">
          
          <div className="row center-xs">
            <div className="display-3">
            <Link to="/" className="display-4 ">Movizz</Link>

              <h1 className="display-5">Sign in to your account</h1>
              <form onSubmit={this.onSubmit}>

                <div className="all-forms">
                  <h1 className="display-6 start-xs">Email</h1>
                   <TextFieldGroup
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    error={errors.email}
                    />

              
                    <h1 className="display-6 start-xs">Password</h1>
                    <TextFieldGroup
                     name="password"
                     type="password"
                     value={this.state.password}
                     onChange={this.onChange}
                     error={errors.password}
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}


const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, {loginUser})(Login);
