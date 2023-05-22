import {formatDistanceToNow} from 'date-fns'

import {Component} from 'react'
import {Link} from 'react-router-dom'

import SavedVideosContext from '../../Contexts/SavedVideosContext'

import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  SavedVideosContainer,
  ContentContainer,
  Content,
  Heading,
  SavedVideosList,
  SavedVideo,
  SavedVideoThumbnail,
  VideoContent,
  Title,
  Para,
  ViewsPublishedContainer,
  Views,
  Published,
  NoSavedVideosContainer,
  Image,
} from './styledComponents'
import './index.css'
import ModeContext from '../../Contexts/ModeContext'

class SavedVideos extends Component {
  renderSavedVideos = mode => (
    <SavedVideosContext.Consumer>
      {value => {
        const {savedVideosList} = value
        if (savedVideosList.length < 1) {
          return (
            <NoSavedVideosContainer mode={mode}>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                alt="no saved videos"
              />
              <Heading>No saved videos found</Heading>
              <Para>You can save your videos while watching them</Para>
              <Para>Save your videos by clicking a button</Para>
            </NoSavedVideosContainer>
          )
        }
        return (
          <Content mode={mode}>
            <Heading mode={mode}>Saved Videos</Heading>
            <SavedVideosList>
              {savedVideosList.map(eachVideo => {
                const {
                  title,
                  thumbnailUrl,
                  viewCount,
                  publishedAt,
                  channel,
                  id,
                } = eachVideo
                return (
                  <Link to={`/videos/${id}`} className="link">
                    <SavedVideo key={id}>
                      <SavedVideoThumbnail
                        src={thumbnailUrl}
                        alt="video thumbnail"
                      />
                      <VideoContent>
                        <Title className="title" mode={mode}>
                          {title}
                        </Title>
                        <Para>{channel.name}</Para>
                        <ViewsPublishedContainer>
                          <Views>{viewCount} views</Views>
                          <Published>
                            {/* .{formatDistanceToNow(new Date(publishedAt))} */}
                            {publishedAt}
                          </Published>
                        </ViewsPublishedContainer>
                      </VideoContent>
                    </SavedVideo>
                  </Link>
                )
              })}
            </SavedVideosList>
          </Content>
        )
      }}
    </SavedVideosContext.Consumer>
  )

  render() {
    return (
      <ModeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const mode = isDarkMode ? 'dark' : 'light'
          return (
            <SavedVideosContainer data-testid="savedVideos" mode={mode}>
              <Header />
              <ContentContainer>
                <Sidebar />
                {this.renderSavedVideos(mode)}
              </ContentContainer>
            </SavedVideosContainer>
          )
        }}
      </ModeContext.Consumer>
    )
  }
}

export default SavedVideos
