import styled from 'styled-components'

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Form = styled.form`
  padding: 15px 30px;
  box-shadow: 1px 1px 12px 1px #ebebeb;
  width: 400px;
  border-radius: 5px;
`
export const Logo = styled.img`
  margin: 30px auto;
  width: 150px;
  display: block;
`
export const Input = styled.input`
  padding-left: 10px;
  border-style: solid;
  border-color: #d7dfe9;
  border-width: 1px;
  border-radius: 3px;
  width: ${props => (props.check ? '20px' : '100%')};
  height: 40px;
  display: ${props => (props.check ? 'inline' : 'block')};
  outline: none;
`
export const Label = styled.label`
  width: 100%;
  display: ${props => (props.check ? 'inline' : 'block')};
  font-size: ${props => (props.check ? '14px' : '12px')};
  margin-bottom: 5px;
  margin-top: ${props => (props.check ? '0px' : '20px')};
  color: ${props => (props.check ? ' #313131' : '#616e7c')};
  font-weight: 500;
  margin-left: ${props => (props.check ? '6px' : '0px')};
`
export const CustomButton = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  outline: none;
  color: white;
  background-color: #3b82f6;
  display: block;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 30px;
  border-style: none;
  color: #ffffff;
`
export const ShowPassword = styled.div`
  display: flex;
  align-items: center;
`

export const ErrorMsg = styled.p`
  font-size: 14px;
  color: red;
  margin-top: 0px;
`
