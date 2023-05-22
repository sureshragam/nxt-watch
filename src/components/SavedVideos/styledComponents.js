import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  height: 100vh;
  background-color: ${props => (props.mode === 'dark' ? '#0f0f0f' : '#f1f5f9')};
`
export const ContentContainer = styled.div`
  display: flex;
  height: 92.1%;
`
export const Content = styled.div`
  padding: 10px 20px;
  flex-basis: 82%;
  overflow-y: auto;

  color: ${props => (props.mode === 'dark' ? 'white' : '#0f0f0f')};
`
export const Heading = styled.h1``
export const SavedVideosList = styled.ul`
  padding-left: 0px;
`
export const SavedVideo = styled.li`
  list-style-type: none;
  display: flex;
  align-items: flex-start;
  gap: 30px;
  height: 200px;
  width: 100%;
  margin-bottom: 20px;
`
export const SavedVideoThumbnail = styled.img`
  flex-basis: 35%;
  height: 100%;
`
export const VideoContent = styled.div`
  flex-basis: 47%;
`
export const Title = styled.p`
  font-size: 20px;
  color: ${props => (props.mode === 'dark' ? 'white' : '#0f0f0f')};
  margin-top: 5px;

  margin-bottom: 10px;
`
export const Para = styled.p`
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 0;
`
export const ViewsPublishedContainer = styled.div`
  display: flex;
  gap: 10px;
`
export const Views = styled.p``
export const Published = styled.p``

export const NoSavedVideosContainer = styled.div`
  text-align: center;
  width: 100%;
  background-color: ${props => (props.mode === 'dark' ? '#0f0f0f' : '#f1f5f9')};
  color: ${props => (props.mode === 'dark' ? 'white' : '#0f0f0f')};
`
export const Image = styled.img`
  width: 30%;
  margin-top: 40px;
`
