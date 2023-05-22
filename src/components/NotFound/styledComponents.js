import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  background-color: ${props => (props.mode === 'dark' ? '#0f0f0f' : 'white')};
  height: 100vh;
  color: ${props => (props.mode === 'dark' ? 'white' : 'black')};
`
export const NotFoundContent = styled.div`
  display: flex;
  justify-content: space-between;
  height: 93%;
`
export const Content = styled.div`
  flex-basis: 82%;
  height: 100%;

  text-align: center;
`
export const Image = styled.img`
  width: 40%;
  margin-top: 30px;
`
export const Heading = styled.h1`
  font-size: 20px;
`
export const Para = styled.p`
  font-size: 20px;
`
