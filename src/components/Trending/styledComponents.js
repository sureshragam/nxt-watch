import styled from 'styled-components'

export const TrendingContainer = styled.div`
  height: 100vh;
  background-color: ${props => (props.mode === 'dark' ? '#0f0f0f' : '#f1f5f9')};
`
export const TrendingContent = styled.div`
  display: flex;
  justify-content: space-between;
  height: 93%;
`
export const Content = styled.div`
  flex-basis: 85%;
  height: 100%;
  overflow-y: scroll;
  color: ${props => (props.mode === 'dark' ? 'white' : 'black')};
`
export const Heading = styled.h1`
  padding-left: 20px;
`
