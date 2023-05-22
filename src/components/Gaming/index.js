import {Component} from 'react'

import Header from '../Header'
import Sidebar from '../Sidebar'
import GamingVideos from '../GamingVideos'
import {
  GamingContainer,
  GamingContent,
  Content,
  Heading,
} from './styledComponents'
import ModeContext from '../../Contexts/ModeContext'

class Gaming extends Component {
  render() {
    return (
      <ModeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const mode = isDarkMode ? 'dark' : 'light'
          return (
            <GamingContainer mode={mode} data-testid="gaming">
              <Header />
              <GamingContent>
                <Sidebar />
                <Content mode={mode}>
                  <Heading mode={mode}>Gaming</Heading>
                  <GamingVideos />
                </Content>
              </GamingContent>
            </GamingContainer>
          )
        }}
      </ModeContext.Consumer>
    )
  }
}

export default Gaming
