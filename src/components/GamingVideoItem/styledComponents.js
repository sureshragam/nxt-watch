import styled from 'styled-components'

export const VideoItemContainer = styled.li`
  list-style-type: none;
  display: block;
  min-width: 300px;
  width: 20%;
  padding: 5px 5px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const ThumbnailImage = styled.img`
  width: 100%;
`
export const VideoContent = styled.div`
  display: flex;
  gap: 5px;
`
export const Logo = styled.img`
  width: 30px;
  height: 35px;
  margin-top: 5px;
`
export const Title = styled.p`
  font-size: 18px;
`
export const VideoDetailsContent = styled.div``
export const ChannelName = styled.p`
  font-size: 16px;
`
export const VideoViewsAndPublished = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 0px;
`
export const Views = styled(ChannelName)`
  margin-top: 0px;
`
export const Published = styled(Views)``
