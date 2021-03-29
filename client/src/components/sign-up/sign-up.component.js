import React, { useState } from 'react';
import { connect } from 'react-redux'; 
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from "../../redux/user/user.actions";
import './sign-up.styles.scss';

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({ displayName: '', email: '' , password: '', confirmPassword: ''})
  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    if(password !== confirmPassword) {
      alert("password don't match");
      return;
    }
    signUpStart({ displayName, email, password })
    setUserCredentials({ 
      displayName: '',
      email: '',  
      password: '',
      confirmPassword: ''
    });
  }

  const handleChange = event => {
    const { value, name } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  }

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>

      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput 
          handleChange={handleChange}
          label='Display Name' 
          name='displayName' 
          type='text'
          value={displayName}
          required
        />
        <FormInput 
          handleChange={handleChange}
          label='Email' 
          name='email' 
          type='email'
          value={email}
          required 
        />
        <FormInput 
          handleChange={handleChange}
          label='Password' 
          name='password' 
          type='password'
          value={password}
          required 
        />
        <FormInput 
          handleChange={handleChange}
          label='Confirm Password' 
          name='confirmPassword' 
          type='password'
          value={confirmPassword}
          required 
        />
        <CustomButton type='submit'>Sign Up</CustomButton>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userInfo => dispatch(signUpStart(userInfo)) 
})

export default connect(null, mapDispatchToProps)(SignUp);
