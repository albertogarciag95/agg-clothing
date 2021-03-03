import React from 'react';
import { connect } from 'react-redux'; 
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from "../../redux/user/user.actions";
import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if(password !== confirmPassword) {
      alert("password don't match");
      return;
    }
    this.props.signUpStart({ displayName, email, password })
    this.setState({ 
      displayName: '',
      email: '',  
      password: '',
      confirmPassword: ''
    });
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput 
            handleChange={this.handleChange}
            label='Display Name' 
            name='displayName' 
            type='text'
            value={displayName}
            required
          />
          <FormInput 
            handleChange={this.handleChange}
            label='Email' 
            name='email' 
            type='email'
            value={email}
            required 
          />
          <FormInput 
            handleChange={this.handleChange}
            label='Password' 
            name='password' 
            type='password'
            value={password}
            required 
          />
          <FormInput 
            handleChange={this.handleChange}
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
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userInfo => dispatch(signUpStart(userInfo)) 
})

export default connect(null, mapDispatchToProps)(SignUp);
