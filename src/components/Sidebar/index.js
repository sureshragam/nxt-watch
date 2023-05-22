import {Component} from 'react'
import {Link} from 'react-router-dom'

import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import SidebarContext from '../../Contexts/SidebarContext'
import ModeContext from '../../Contexts/ModeContext'

import {
  SidebarContainer,
  SidebarOptions,
  SidebarOption,
  Contact,
  Heading,
  SocialIcons,
  SocialIcon,
  Para,
} from './styledComponents'

import './index.css'

const sidebarOptions = [
  {id: 1, displayText: 'Home', path: '/'},
  {id: 2, displayText: 'Trending', path: '/trending'},
  {id: 3, displayText: 'Gaming', path: '/gaming'},
  {
    id: 4,
    displayText: 'Saved videos',
    path: '/saved-videos',
  },
]

const socialLinksIcons = [
  {
    id: 1,
    name: 'facebook',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png ',
  },
  {
    id: 2,
    name: 'twitter',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png ',
  },
  {
    id: 3,
    name: 'linked in',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png ',
  },
]

class Sidebar extends Component {
  renderSidebarOptions = isDarkMode => (
    <SidebarContext.Consumer>
      {value => {
        const {activeTab, onChangeSidebarOption} = value

        return (
          <SidebarOptions>
            {sidebarOptions.map(eachOption => {
              const {id, displayText, path} = eachOption
              const onClickSidebarOption = () => {
                onChangeSidebarOption(id)
              }
              const active = activeTab === id
              const className = isDarkMode ? 'sidebarLink white' : 'sidebarLink'
              const renderIcon = () => {
                const style = active ? 'activeIcon' : null
                switch (id) {
                  case sidebarOptions[0].id:
                    return <AiFillHome className={style} />
                  case sidebarOptions[1].id:
                    return <AiFillFire className={style} />
                  case sidebarOptions[2].id:
                    return <SiYoutubegaming className={style} />
                  case sidebarOptions[3].id:
                    return <MdPlaylistAdd className={style} />

                  default:
                    return null
                }
              }

              return (
                <SidebarOption key={id} active={active}>
                  <Link
                    className={className}
                    to={path}
                    onClick={onClickSidebarOption}
                  >
                    {renderIcon()}
                    {displayText}
                  </Link>
                </SidebarOption>
              )
            })}
          </SidebarOptions>
        )
      }}
    </SidebarContext.Consumer>
  )

  renderContact = mode => (
    <Contact mode={mode}>
      <Heading>CONTACT US</Heading>
      <SocialIcons>
        {socialLinksIcons.map(eachIcon => {
          const {id, name, imageUrl} = eachIcon
          return <SocialIcon src={imageUrl} alt={`${name} logo`} key={id} />
        })}
      </SocialIcons>
      <Para>Enjoy! Now to see your channels and recommendations!</Para>
    </Contact>
  )

  render() {
    return (
      <ModeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const mode = isDarkMode ? 'dark' : 'white'
          return (
            <SidebarContainer mode={mode}>
              {this.renderSidebarOptions(isDarkMode)}
              {this.renderContact(mode)}
            </SidebarContainer>
          )
        }}
      </ModeContext.Consumer>
    )
  }
}

export default Sidebar
