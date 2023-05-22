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

import TrendingVideoItem from '../TrendingVideoItem'

const apiStatusConstrains = {
  Initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class TrendingVideos extends Component {
  state = {apiStatus: apiStatusConstrains.initial, videosList: []}

  componentDidMount() {
    this.getVideosList()
  }

  onFetchSuccess = data => {
    const modifiedData = data.map(eachObj => ({
      channel: eachObj.channel,
      id: eachObj.id,
      publishedAt: eachObj.published_at,
      thumbnailUrl: eachObj.thumbnail_url,
      title: eachObj.title,
      viewCount: eachObj.view_count,
    }))
    console.log(modifiedData)
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
    const url = 'https://apis.ccbp.in/videos/trending'

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

  renderSuccessView = () => {
    const {videosList} = this.state
    return (
      <VideosList>
        {videosList.map(eachVideo => {
          const {id} = eachVideo
          return <TrendingVideoItem key={id} videoDetails={eachVideo} />
        })}
      </VideosList>
    )
  }

  onRetryFetch = () => {
    this.getVideosList()
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
        We are having some trouble to complete your request please try again{' '}
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
    return <VideosContainer>{this.renderSomething(apiStatus)}</VideosContainer>
  }
}

export default TrendingVideos
