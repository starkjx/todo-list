import React, {Component} from 'react';
import './UserDialog.css';
import {signUp, signIn, sendPasswordResetEmail} from './leanCloud';
import ForgotPasswordForm from './ForgotPasswordForm';
import SignInOrSignUp from './SignInOrSignUp';

export default class UserDialog extends Component{
  constructor(props){
    super(props)
    this.state = {
      selectedState: 'signInOrSignUp',
      formData: {
        email: '',
        username: '',
        password: ''
      }
    }
  }
  signUp(e){
    e.preventDefault();
    let {email,username, password} = this.state.formData
    let success = (user)=>{
      this.props.onSignUp.call(null,user)
    }
    let error = (error)=>{
      switch(error.code){
        case 202:
          alert('用户名被占用')
          break;
        default: 
          alert(error)
          break;
      }
    }
    signUp(email,username,password,success,error)
  }
  signIn(e){
    e.preventDefault();
    let {username, password} = this.state.formData
    let success = (user)=>{
      this.props.onSignIn.call(null,user)
    }
    let error = (error)=>{
      switch(error.code){
        case 210:
          alert('用户名与密码不匹配')
          break
        default:
          alert(error)
          break
      }
    }
    signIn(username,password,success,error)
  }
  showForgotPassword(){
    let stateCopy = JSON.parse(JSON.stringify(this.state))
    stateCopy.selectedState = 'forgotPassword'
    this.setState(stateCopy)
  }
  returnToSign(){
    let stateCopy = JSON.parse(JSON.stringify(this.state))
    stateCopy.selectedState = 'signInOrSignUp'
    this.setState(stateCopy)
  }
  resetPassword(e){
    e.preventDefault()
    sendPasswordResetEmail(this.state.formData.email)
  }
  changeFormData(key,e){
    let stateTemp = JSON.parse(JSON.stringify(this.state))
    stateTemp.formData[key] = e.target.value
    this.setState(stateTemp)
  }
  render(){
    return (
      <div className="UserDialog-Wrapper">
        <div className="UserDialog">
          {this.state.selectedState === 'signInOrSignUp' ?
            <SignInOrSignUp
              formData={this.state.formData}
              onChange={this.changeFormData.bind(this)}
              onSignIn={this.signIn.bind(this)}
              onSignUp={this.signUp.bind(this)}
              onForgotPassword={this.showForgotPassword.bind(this)}
            /> : 
            <ForgotPasswordForm 
              formData={this.state.formData}
              onSubmit={this.resetPassword.bind(this)}
              onChange={this.changeFormData.bind(this)}
              onReturnToSign={this.returnToSign.bind(this)}/>}
        </div>
      </div>
    )
  }
}
