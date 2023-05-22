import {Component} from 'react'
import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {
  VideosContainer,
  VideosList,
  NoVideoContainer,
  Image,
  Heading,
  Para,
  RetryButton,
  LoaderContainer,
} from './styledComponents'

import GamingVideoItem from '../GamingVideoItem'
import ModeContext from '../../Contexts/ModeContext'

const apiStatusConstrains = {
  Initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class GamingVideos extends Component {
  state = {apiStatus: apiStatusConstrains.initial, videosList: []}

  componentDidMount() {
    this.getVideosList()
  }

  onFetchSuccess = data => {
    const modifiedData = data.map(eachObj => ({
      id: eachObj.id,
      thumbnailUrl: eachObj.thumbnail_url,
      title: eachObj.title,
      viewCount: eachObj.view_count,
    }))

    this.setState({
      videosList: modifiedData,
      apiStatus: apiStatusConstrains.success,
    })
  }

  onFetchFailure = () => {
    console.log('error')
    this.setState({apiStatus: apiStatusConstrains.failure})
  }

  getVideosList = async () => {
    const url = 'https://apis.ccbp.in/videos/gaming'

    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      this.onFetchSuccess(data.videos)
    } else {
      this.onFetchFailure()
    }
  }

  onRetryFetch = () => {
    this.getVideosList()
  }

  renderSuccessView = () => {
    const {videosList} = this.state
    return (
      <VideosList>
        {videosList.map(eachVideo => {
          const {id} = eachVideo
          return <GamingVideoItem key={id} videoDetails={eachVideo} />
        })}
      </VideosList>
    )
  }

  renderFailureView = mode => (
    <NoVideoContainer mode={mode}>
      <Image
        src={
          mode === 'dark'
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
      />
      <Heading>Oops! Something Went Wrong</Heading>
      <Para>
        We are having some trouble to complete your request please try again
      </Para>
      <RetryButton onClick={this.onRetryFetch}>Retry</RetryButton>
    </NoVideoContainer>
  )

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="TailSpin" />
    </LoaderContainer>
  )

  renderSomething = apiStatus => {
    switch (apiStatus) {
      case apiStatusConstrains.success:
        return this.renderSuccessView()
      case apiStatusConstrains.failure:
        return this.renderFailureView()
      case apiStatusConstrains.initial:
        return this.renderLoadingView()

      default:
        return null
    }
  }

  render() {
    const {apiStatus} = this.state
    return (
      <ModeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const mode = isDarkMode ? 'dark' : 'light'
          return (
            <VideosContainer mode={mode}>
              {this.renderSomething(apiStatus)}
            </VideosContainer>
          )
        }}
      </ModeContext.Consumer>
    )
  }
}

export default GamingVideos
