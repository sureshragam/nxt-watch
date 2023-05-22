import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'

import ModeContext from '../../Contexts/ModeContext'

import {
  VideoItemContainer,
  ThumbnailImage,
  VideoContent,
  VideoDetailsContent,
  Title,
  ChannelName,
  VideoViewsAndPublished,
  Views,
  Published,
} from './styledComponents'

const TrendingVideoItem = props => {
  const {videoDetails} = props
  const {
    channel,
    title,
    thumbnailUrl,
    publishedAt,
    viewCount,
    id,
  } = videoDetails

  return (
    <ModeContext.Consumer>
      {value => {
        const {isDarkMode} = value
        const className = isDarkMode ? 'link trending white' : 'link trending'
        return (
          <VideoItemContainer>
            <Link to={`/videos/${id}`} className={className}>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoContent>
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

export default TrendingVideoItem
