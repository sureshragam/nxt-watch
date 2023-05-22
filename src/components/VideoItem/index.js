import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import ModeContext from '../../Contexts/ModeContext'

import {
  VideoItemContainer,
  ThumbnailImage,
  VideoContent,
  Logo,
  VideoDetailsContent,
  Title,
  ChannelName,
  VideoViewsAndPublished,
  Views,
  Published,
} from './styledComponents'

const VideoItem = props => {
  const {videoDetails} = props
  const {
    id,
    channel,
    title,
    thumbnailUrl,
    publishedAt,
    viewCount,
  } = videoDetails

  return (
    <ModeContext.Consumer>
      {value => {
        const {isDarkMode} = value
        const mode = isDarkMode ? 'dark' : 'light'
        return (
          <VideoItemContainer>
            <Link to={`/videos/${id}`} className="link">
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoContent mode={mode}>
                <Logo src={channel.profile_image_url} alt="channel logo" />

                <VideoDetailsContent>
                  <Title>{title}</Title>
                  <ChannelName>{channel.name}</ChannelName>
                  <VideoViewsAndPublished>
                    <Views>{viewCount} Views</Views>
                    <Published>
                      {/* . {formatDistanceToNow(new Date(publishedAt))} */}
                      {publishedAt}
                    </Published>
                  </VideoViewsAndPublished>
                </VideoDetailsContent>
              </VideoContent>
            </Link>
          </VideoItemContainer>
        )
      }}
    </ModeContext.Consumer>
  )
}

export default VideoItem
