import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {IoMoon} from 'react-icons/io5'
import {BsSun} from 'react-icons/bs'
import {
  Navbar,
  Logo,
  NavbarContent,
  CustomButton,
  Profile,
  PopUpContainer,
  PopupsCustomButton,
  PopupHeading,
} from './styledComponents'
import ModeContext from '../../Contexts/ModeContext'
import './index.css'

const darkLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
const lightLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

const Header = props => {
  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <ModeContext.Consumer>
      {value => {
        const {isDarkMode, onToggleMode} = value
        const mode = isDarkMode ? 'dark' : 'white'
        return (
          <Navbar mode={mode}>
            <Link to="/" className="logo-link">
              <Logo
                src={isDarkMode ? darkLogo : lightLogo}
                alt="website logo"
              />
            </Link>

            <NavbarContent>
              <CustomButton onClick={onToggleMode} data-testid="theme">
                {isDarkMode ? <BsSun /> : <IoMoon />}
              </CustomButton>

              <Profile
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Popup
                trigger={<CustomButton outline>Logout</CustomButton>}
                modal
              >
                {close => (
                  <PopUpContainer>
                    <PopupHeading>
                      Are you sure, you want to logout
                    </PopupHeading>
                    <PopupsCustomButton type="button" onClick={close}>
                      Cancel
                    </PopupsCustomButton>
                    <PopupsCustomButton
                      type="button"
                      confirm
                      onClick={onLogout}
                    >
                      Confirm
                    </PopupsCustomButton>
                  </PopUpContainer>
                )}
              </Popup>
            </NavbarContent>
          </Navbar>
        )
      }}
    </ModeContext.Consumer>
  )
}

export default withRouter(Header)
