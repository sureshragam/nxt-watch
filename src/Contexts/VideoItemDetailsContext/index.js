import {createContext} from 'react'

const VideoItemDetailsContext = createContext({
  isLiked: false,
  isDisliked: false,
  isSaved: false,
  onToggleLike: () => {},
  onToggleDislike: () => {},
})
