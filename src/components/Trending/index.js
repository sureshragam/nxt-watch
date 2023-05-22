import {Component} from 'react'

import Header from '../Header'
import Sidebar from '../Sidebar'
import TrendingVideos from '../TrendingVideos'
import {
  TrendingContainer,
  TrendingContent,
  Content,
  Heading,
} from './styledComponents'
import ModeContext from '../../Contexts/ModeContext'

class Trending extends Component {
  render() {
    return (
      <ModeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const mode = isDarkMode ? 'dark' : 'light'
          return (
            <TrendingContainer mode={mode} data-testid="trending">
              <Header />
              <TrendingContent>
                <Sidebar />
                <Content mode={mode}>
                  <Heading>Trending</Heading>
                  <TrendingVideos />
                </Content>
              </TrendingContent>
            </TrendingContainer>
          )
        }}
      </ModeContext.Consumer>
    )
  }
}

export default Trending
