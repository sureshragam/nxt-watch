import {createContext} from 'react'

const SavedVideosContext = createContext({
  savedVideosList: [],
  addToSavedVideos: () => {},
})

export default SavedVideosContext
