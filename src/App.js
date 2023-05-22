import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'

import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'

import SavedVideos from './components/SavedVideos'

import SidebarContext from './Contexts/SidebarContext'
import ModeContext from './Contexts/ModeContext'
import SavedVideosContext from './Contexts/SavedVideosContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    activeTab: 1,
    isDarkMode: false,
    savedVideosList: [],
  }

  onChangeSidebarOption = id => {
    this.setState({activeTab: id})
  }

  onToggleMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  addToSavedVideos = videoDetails => {
    const {savedVideosList} = this.state
    const existed = savedVideosList.some(
      eachVideo => eachVideo.id === videoDetails.id,
    )
    if (!existed) {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, videoDetails],
      }))
    }
  }

  removeFromSavedList = videoDetails => {
    const {savedVideosList} = this.state
    const filteredList = savedVideosList.filter(
      eachVideo => eachVideo.id !== videoDetails.id,
    )
    this.setState({savedVideosList: filteredList})
  }

  //   onToggleLike = () => {
  //     const {isLiked} = this.state
  //     if (isLiked) {
  //       this.setState(prevState => ({isLiked: !prevState.isLiked}))
  //     } else {
  //       this.setState(prevState => ({
  //         isLiked: !prevState.isLiked,
  //         isDisliked: false,
  //       }))
  //     }
  //   }

  //   onToggleDislike = () => {
  //     const {isDisliked} = this.state
  //     if (isDisliked) {
  //       this.setState(prevState => ({isDisliked: !prevState.isDisliked}))
  //     } else {
  //       this.setState(prevState => ({
  //         isDisliked: !prevState.isDisliked,
  //         isLiked: false,
  //       }))
  //     }
  //   }

  render() {
    const {activeTab, isDarkMode, savedVideosList} = this.state
    console.log(savedVideosList, 'oops')
    return (
      <>
        <SavedVideosContext.Provider
          value={{
            savedVideosList,
            addToSavedVideos: this.addToSavedVideos,
            removeFromSavedList: this.removeFromSavedList,
          }}
        >
          <ModeContext.Provider
            value={{
              isDarkMode,
              onToggleMode: this.onToggleMode,
              onChangeSidebarOption: this.onChangeSidebarOption,
            }}
          >
            <SidebarContext.Provider
              value={{
                activeTab,
                onChangeSidebarOption: this.onChangeSidebarOption,
              }}
            >
              <Switch>
                <Route exact path="/login" component={Login} />
                <ProtectedRoute exact path="/" component={Home} />
                <ProtectedRoute exact path="/trending" component={Trending} />
                <ProtectedRoute exact path="/gaming" component={Gaming} />
                <ProtectedRoute
                  exact
                  path="/videos/:id"
                  component={VideoItemDetails}
                />
                <ProtectedRoute
                  exact
                  path="/saved-videos"
                  component={SavedVideos}
                />
                <ProtectedRoute exact path="/not-found" component={NotFound} />
                <Redirect to="/not-found" />
              </Switch>
            </SidebarContext.Provider>
          </ModeContext.Provider>
        </SavedVideosContext.Provider>
      </>
    )
  }
}

export default App
