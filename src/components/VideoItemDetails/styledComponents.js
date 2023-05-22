import styled from 'styled-components'

export const VideoDetailContainer = styled.div`
  height: 100vh;
  background-color: ${props =>
    props.mode === 'dark' ? '#0f0f0f ' : '#f9f9f9 '};
`
export const VideoDetailsContent = styled.div`
  display: flex;
  height: 92%;
`
export const Content = styled.div`
  flex-basis: 85%;
  padding: 10px;
  height: 100%;
  color: ${props => (props.mode === 'dark' ? 'white' : 'black')};
`
export const Title = styled.p`
  font-size: 20px;
`
export const LikeViewsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const ViewPublishContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`
export const Views = styled.p``
export const Publish = styled.p``
export const LikesDislikesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-right: 20px;
  margin-top: 0;
`
export const ChannelDetails = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`
export const Logo = styled.img`
  width: 40px;
`
export const ChannelContent = styled.div`
  padding-left: 10px;
`
export const ChannelName = styled.p`
  font-size: 18px;
  margin-top: 0;
`

export const SubscribersCount = styled.p`
  font-size: 16px;
`
export const ChannelDescription = styled.p`
  font-size: 16px;
`
export const Likes = styled.div`
  display: flex;
  align-items: center;
  gap: 1px;
  color: ${props => (props.color === 'active' ? '#2563eb;' : '#64748b')};
`
export const Dislikes = styled(Likes)``
export const LikeButton = styled.button`
  background-color: transparent;
  border-style: none;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  color: ${props => (props.color === 'active' ? '#2563eb;' : '#64748b')};
`
export const DislikeButton = styled(LikeButton)``
export const SaveButton = styled(LikeButton)``
export const NoVideoContainer = styled.div`
  text-align: center;
  height: 92%;
  color: ${props => (props.mode === 'dark' ? 'white' : 'black')};
`
export const Image = styled.img`
  width: 30%;
  margin-top: 50px;
`
export const Heading = styled.h1``
export const Para = styled.p``
export const RetryButton = styled.button`
  padding: 10px 20px;
  width: 150px;
  color: white;
  border-radius: 5px;
  background-color: #4f46e5;
  border-style: none;
  outline: none;
  margin-top: 30px;
  cursor: pointer;
`
export const LoaderContainer = styled.div`
  text-align: center;
  padding-top: 50px;
`
