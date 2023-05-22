import {Link} from 'react-router-dom'
import ModeContext from '../../Contexts/ModeContext'
import {
  VideoItemContainer,
  ThumbnailImage,
  VideoContent,
  VideoDetailsContent,
  Title,
  VideoViewsAndPublished,
  Views,
} from './styledComponents'

const GamingVideoItem = props => {
  const {videoDetails} = props
  const {title, thumbnailUrl, viewCount, id} = videoDetails

  return (
    <ModeContext.Consumer>
      {value => {
        const {isDarkMode} = value
        const className = isDarkMode ? 'link gaming white' : 'link gaming'
        return (
          <VideoItemContainer>
            <Link to={`/videos/${id}`} className={className}>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoContent>
                <VideoDetailsContent>
                  <Title>{title}</Title>
                  <VideoViewsAndPublished>
                    <Views>{viewCount} Views</Views>
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

export default GamingVideoItem
