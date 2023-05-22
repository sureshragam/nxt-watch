import {Component} from 'react'

import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import {
  LoginContainer,
  Form,
  Logo,
  Input,
  Label,
  CustomButton,
  ShowPassword,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showErrorMsg: false,
    showPassword: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSuccessFetch = data => {
    console.log('called')
    const jwtToken = data.jwt_token
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onFailureFetch = msg => {
    this.setState({errorMsg: msg, showErrorMsg: true, password: ''})
  }

  onLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const UserDetails = {username, password}

    const options = {
      method: 'POST',
      body: JSON.stringify(UserDetails),
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      this.onSuccessFetch(data)
    } else {
      const data = await response.json()
      console.log(data)
      this.onFailureFetch(data.error_msg)
    }
  }

  onChangeShowPassword = event => {
    if (event.target.checked === true) {
      this.setState({showPassword: true})
    } else {
      this.setState({showPassword: false})
    }
  }

  render() {
    const {
      username,
      password,
      showPassword,
      showErrorMsg,
      errorMsg,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginContainer>
        <Form onSubmit={this.onLogin}>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <Label htmlFor="username">USERNAME</Label>
          <Input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={this.onChangeUsername}
          />
          <Label htmlFor="password">PASSWORD</Label>
          <Input
            type={showPassword ? 'text' : 'password'}
            id="password"
            placeholder="Password"
            value={password}
            onChange={this.onChangePassword}
          />
          <ShowPassword>
            <Input
              type="checkbox"
              id="checkbox"
              check
              onChange={this.onChangeShowPassword}
            />
            <Label htmlFor="checkbox" check>
              Show Password
            </Label>
          </ShowPassword>
          {showErrorMsg ? <ErrorMsg>* {errorMsg}</ErrorMsg> : null}
          <CustomButton>Login</CustomButton>
        </Form>
      </LoginContainer>
    )
  }
}
export default Login
