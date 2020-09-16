import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import useForm from '../utils/useForm.js';
import axios from 'axios';

import logo from '../imgs/LogoEJ.png';
import SignUpForm from './SignUpForm.js';

export default function SignUpPage(props) {
  const [formInfo, handleChanges, clearForm] = useForm();

  const submitHandler = e => {
    e.preventDefault();
      const {username, password} = formInfo;
      axios.post(`https://pt11expat.herokuapp.com/api/users/register`, { username, password })
      .then(res => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('username', username);
          props.history.push('/newsfeed');
        })
        .catch(err => console.log(err));

      clearForm();
  }

  // function that checks if all fields of the form have been filled out if they have
  // returns a classname to be applied to the jsx element
  const checkFilled = () => {
    if(formInfo.username && formInfo.email && formInfo.password && formInfo.confirmPassword) {
      return 'filled';
    } else {
      return '';
    }
  }

  return (
    <div className="auth-page main">
      <div className="auth-column auth-left">
        <img className="auth-logo" src={logo} alt="expat journal logo" />
      </div>

      <div className="auth-column auth-right">
        <Link to="/sign-in">
          <button className="auth-nav-bar-sign-in">Sign in</button>
        </Link>
        <h1>Expat Journal</h1>
        <h3>Experiences to remember and share</h3>

        <div className="auth-form">
          <h2>Sign up to start your journal</h2>

          <SignUpForm submitHandler={submitHandler} handleChanges={handleChanges} formInfo={formInfo} />

          <h4 className="auth-extra-sign-in-header">
            Already have an account? <Link to="/sign-in">Sign in</Link> here!
          </h4>
        </div>
      </div>
    </div>
  );
}
