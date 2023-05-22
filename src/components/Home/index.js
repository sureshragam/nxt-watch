import {Component} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import ModeContext from '../../Contexts/ModeContext'

import {
  HomeContainer,
  HomeContent,
  Content,
  BannerContainer,
  BannerLogo,
  Para,
  CustomButton,
  CloseButton,
} from './styledComponents'

import Header from '../Header'
import Videos from '../Videos'
import Sidebar from '../Sidebar'

class Home extends Component {
  state = {showBanner: true}

  closeBanner = () => {
    this.setState({showBanner: false})
  }

  render() {
    const {showBanner} = this.state
    return (
      <ModeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const mode = isDarkMode ? 'dark' : 'white'
          return (
            <HomeContainer data-testid="home">
              <Header />
              <HomeContent>
                <Sidebar />
                <Content mode={mode}>
                  <BannerContainer
                    data-testid="banner"
                    show={showBanner ? 'banner' : 'noBanner'}
                  >
                    <BannerLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="nxt watch logo"
                    />
                    <CloseButton
                      type="button"
                      onClick={this.closeBanner}
                      data-testid="close"
                    >
                      <AiOutlineClose />
                    </CloseButton>
                    <Para>
                      Buy Nxt Watch Premium prepaid plans with <br />
                      UPI
                    </Para>
                    <CustomButton type="button">GET IT NOW</CustomButton>
                  </BannerContainer>
                  <Videos />
                </Content>
              </HomeContent>
            </HomeContainer>
          )
        }}
      </ModeContext.Consumer>
    )
  }
}

export default Home
