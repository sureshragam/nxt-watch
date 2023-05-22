import styled from 'styled-components'

export const Navbar = styled.div`
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => (props.mode === 'dark' ? '#212121' : 'white')};
  height: 70px;
`

export const Logo = styled.img`
  width: 100px;
`
export const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
export const Mode = styled.img`
  width: 30px;
`
export const Profile = styled.img`
  width: 30px;
`
export const CustomButton = styled.button`
  padding: 5px 10px;
  border-radius: 2px;
  border-style: ${props => (props.outline ? 'solid' : 'none')};
  border-width: 1px;
  border-color: #3b82f6;
  color: #3b82f6;
  cursor: pointer;
  background-color: transparent;
`
export const LogoButton = styled.button`
  background-color: transparent;
  border-style: none;
  cursor: pointer;
`
export const PopUpContainer = styled.div`
  background-color: #181818;
  padding: 10px 20px;
  border-radius: 8px;
  color: white;
  text-align: center;
`
export const PopupsCustomButton = styled(CustomButton)`
  padding: 10px 20px;
  border-radius: 3px;
  border-style: solid;
  margin-right: 30px;
  width: 100px;
  color: white;
  border-color: ${props => (props.confirm ? 'null' : 'white')};
  background-color: ${props => (props.confirm ? '#3b82f6' : 'transparent')};
  margin-bottom: 10px;
  margin-top: 10px;
`
export const PopupHeading = styled.p`
  font-size: 20px;
`
