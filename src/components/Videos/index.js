import {Component} from 'react'
import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {BiSearch} from 'react-icons/bi'

import ModeContext from '../../Contexts/ModeContext'

import {
  VideosContainer,
  VideosList,
  Search,
  CustomButton,
  NoVideoContainer,
  Image,
  Heading,
  Para,
  RetryButton,
  LoaderContainer,
} from './styledComponents'

import VideoItem from '../VideoItem'

const apiStatusConstrains = {
  Initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Videos extends Component {
  state = {apiStatus: apiStatusConstrains.initial, videosList: [], search: ''}

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

  onRetryFetch = () => {
    this.getVideosList()
  }

  getVideosList = async () => {
    const {search} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${search}`
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

  renderNoVideoView = mode => (
    <NoVideoContainer mode={mode}>
      <Image
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <Heading>No Search results found</Heading>
      <Para>Try different key words or remove search filter </Para>
      <RetryButton onClick={this.onRetry}>Retry</RetryButton>
    </NoVideoContainer>
  )

  renderSuccessView = mode => {
    const {videosList} = this.state
    if (videosList.length < 1) {
      return this.renderNoVideoView(mode)
    }

    return (
      <VideosList>
        {videosList.map(eachVideo => {
          const {id} = eachVideo

          return <VideoItem key={id} videoDetails={eachVideo} />
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

  renderSomething = (apiStatus, mode) => {
    switch (apiStatus) {
      case apiStatusConstrains.success:
        return this.renderSuccessView(mode)
      case apiStatusConstrains.failure:
        return this.renderFailureView()
      case apiStatusConstrains.initial:
        return this.renderLoadingView()

      default:
        return null
    }
  }

  onSearch = () => {
    this.getVideosList()
  }

  onRetry = () => {
    this.setState({search: ''}, this.getVideosList)
  }

  onChangeSearch = event => {
    this.setState({search: event.target.value})
  }

  onClickEnter = event => {
    if (event.key === 'Enter') {
      this.getVideosList()
    }
  }

  render() {
    const {apiStatus, search} = this.state
    return (
      <ModeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const mode = isDarkMode ? 'dark' : 'light'
          return (
            <VideosContainer mode={mode}>
              <Search
                type="search"
                placeholder="Search"
                value={search}
                onChange={this.onChangeSearch}
                onKeyDown={this.onClickEnter}
                mode={mode}
              />
              <CustomButton
                data-testid="searchButton"
                onClick={this.onSearch}
                mode={mode}
              >
                <BiSearch />
              </CustomButton>

              {this.renderSomething(apiStatus, mode)}
            </VideosContainer>
          )
        }}
      </ModeContext.Consumer>
    )
  }
}

export default Videos
