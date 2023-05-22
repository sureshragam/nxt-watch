import styled from 'styled-components'

export const GamingContainer = styled.div`
  height: 100vh;
  background-color: ${props =>
    props.mode === 'dark' ? '#0f0f0f' : '#f9f9f9 '};
`
export const GamingContent = styled.div`
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
  padding: 20px;
  color: ${props => (props.mode === 'dark' ? 'white' : 'black')};
  margin: 0;
`
