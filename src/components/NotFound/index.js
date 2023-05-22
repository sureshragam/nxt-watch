import ModeContext from '../../Contexts/ModeContext'
import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  NotFoundContainer,
  NotFoundContent,
  Content,
  Image,
  Heading,
  Para,
} from './styledComponents'

const NotFound = () => (
  <ModeContext.Consumer>
    {value => {
      const {isDarkMode} = value
      const mode = isDarkMode ? 'dark' : 'light'
      return (
        <NotFoundContainer data-testid="notFound" mode={mode}>
          <Header />
          <NotFoundContent>
            <Sidebar />
            <Content>
              <Image
                src={
                  isDarkMode
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                alt="not found"
              />
              <Heading>Page Not Found</Heading>
              <Para>
                we are sorry, the page you requested could not be found.
              </Para>
            </Content>
          </NotFoundContent>
        </NotFoundContainer>
      )
    }}
  </ModeContext.Consumer>
)

export default NotFound
