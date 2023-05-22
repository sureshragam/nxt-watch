import {Component} from 'react'

import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'

import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'

import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'

import ModeContext from '../../Contexts/ModeContext'

import Sidebar from '../Sidebar'
import Header from '../Header'

import SavedVideosContext from '../../Contexts/SavedVideosContext'

import {
  VideoDetailContainer,
  VideoDetailsContent,
  Content,
  Title,
  LikeViewsContainer,
  Views,
  Likes,
  ChannelDetails,
  Logo,
  ChannelContent,
  ChannelName,
  SubscribersCount,
  ChannelDescription,
  LikeButton,
  DislikeButton,
  SaveButton,
  NoVideoContainer,
  Image,
  Heading,
  Para,
  RetryButton,
  LoaderContainer,
  ViewPublishContainer,
  Publish,
  LikesDislikesContainer,
  Dislikes,
} from './styledComponents'

const apiStatusConstrains = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  initial: 'INITIAl',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiStatusConstrains.initial,
    isLiked: false,
    isDisliked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  onFetchSuccess = data => {
    const updatedVideoDetails = {
      id: data.id,
      title: data.title,
      videoUrl: data.video_url,
      thumbnailUrl: data.thumbnail_url,
      channel: data.channel,
      description: data.description,
      viewCount: data.view_count,
      publishedAt: data.published_at,
    }
    this.setState({
      apiStatus: apiStatusConstrains.success,
      videoDetails: updatedVideoDetails,
    })
  }

  onFetchFailure = () => {
    this.setState({apiStatus: apiStatusConstrains.failure})
    console.log('failure')
  }

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
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
      this.onFetchSuccess(data.video_details)
    } else {
      this.onFetchFailure()
    }
  }

  onToggleLike = () => {
    const {isLiked} = this.state
    if (isLiked) {
      this.setState(prevState => ({isLiked: !prevState.isLiked}))
    } else {
      this.setState(prevState => ({
        isLiked: !prevState.isLiked,
        isDisliked: false,
      }))
    }
  }

  onToggleDislike = () => {
    const {isDisliked} = this.state
    if (isDisliked) {
      this.setState(prevState => ({isDisliked: !prevState.isDisliked}))
    } else {
      this.setState(prevState => ({
        isDisliked: !prevState.isDisliked,
        isLiked: false,
      }))
    }
  }

  renderSuccessView = () => {
    const {videoDetails, isLiked, isDisliked, isSaved} = this.state
    const {
      title,
      videoUrl,
      viewCount,
      publishedAt,
      channel,
      description,
      id,
    } = videoDetails

    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {addToSavedVideos, removeFromSavedList, savedVideosList} = value
          const onClickSave = () => {
            if (isSaved) {
              this.setState({isSaved: false})
              removeFromSavedList(videoDetails)
            } else {
              this.setState({isSaved: true})
              const SavedVideoDetails = {
                ...videoDetails,
                isSaved: true,
              }
              addToSavedVideos(SavedVideoDetails)
            }
          }
          const isAlreadySaved = savedVideosList.some(
            eachVideo => eachVideo.id === id,
          )
          return (
            <>
              <ReactPlayer url={videoUrl} width="100%" height="60%" controls />
              <Title>{title}</Title>
              <LikeViewsContainer>
                <ViewPublishContainer>
                  <Views>{viewCount} Views</Views>
                  <Publish>
                    {/* .{formatDistanceToNow(new Date(publishedAt))} */}
                    {publishedAt}
                  </Publish>
                </ViewPublishContainer>

                <LikesDislikesContainer>
                  <Likes color={isLiked ? 'active' : 'inactive'}>
                    <BiLike />
                    <LikeButton
                      type="button"
                      onClick={this.onToggleLike}
                      color={isLiked ? 'active' : 'inactive'}
                    >
                      Like
                    </LikeButton>
                  </Likes>
                  <Dislikes color={isDisliked ? 'active' : 'inactive'}>
                    <BiDislike />
                    <DislikeButton
                      type="button"
                      onClick={this.onToggleDislike}
                      color={isDisliked ? 'active' : 'inactive'}
                    >
                      Dislike
                    </DislikeButton>
                  </Dislikes>

                  <SaveButton
                    type="button"
                    onClick={onClickSave}
                    color={isSaved || isAlreadySaved ? 'active' : 'inactive'}
                  >
                    <MdPlaylistAdd />
                    {isSaved || isAlreadySaved ? 'Saved' : 'Save'}
                  </SaveButton>
                </LikesDislikesContainer>
              </LikeViewsContainer>
              <hr />
              <ChannelDetails>
                <Logo src={channel.profile_image_url} alt="channel logo" />
                <ChannelContent>
                  <ChannelName>{channel.name}</ChannelName>
                  <SubscribersCount>
                    {channel.subscriber_count} Subscribers
                  </SubscribersCount>
                  <ChannelDescription>{description}</ChannelDescription>
                </ChannelContent>
              </ChannelDetails>
            </>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }

  onRetryFetch = () => {
    this.getVideoDetails()
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="TailSpin" />
    </LoaderContainer>
  )

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
        We are having some trouble to complete your request. Please try again.
      </Para>
      <RetryButton onClick={this.onRetryFetch}>Retry</RetryButton>
    </NoVideoContainer>
  )

  renderSomething = (apiStatus, mode) => {
    switch (apiStatus) {
      case apiStatusConstrains.initial:
        return this.renderLoadingView()
      case apiStatusConstrains.success:
        return this.renderSuccessView()
      case apiStatusConstrains.failure:
        return this.renderFailureView(mode)
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
            <VideoDetailContainer mode={mode} data-testid="videoItemDetails">
              <Header />
              <VideoDetailsContent>
                <Sidebar />
                <Content mode={mode}>
                  {this.renderSomething(apiStatus, mode)}
                </Content>
              </VideoDetailsContent>
            </VideoDetailContainer>
          )
        }}
      </ModeContext.Consumer>
    )
  }
}
export default VideoItemDetails
