import styled from 'styled-components'

export const VideosContainer = styled.div`
  padding: 10px 10px;
  height: 100%;
  overflow-y: auto;
`
export const VideosList = styled.ul`
  padding-left: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`
export const Search = styled.input`
  padding-left: 10px;
  margin-left: 5px;
  height: 40px;
  width: 450px;
  outline: none;
  border-color: ${props => (props.mode === 'dark' ? '#212121' : '#d7dfe9')};
  border-style: solid;
  background-color: ${props => (props.mode === 'dark' ? '#0f0f0f' : '#f1f5f9')};
  color: ${props => (props.mode === 'dark' ? 'white' : 'black')};
`
export const CustomButton = styled.button`
  background-color: ${props => (props.mode === 'dark' ? '#212121' : '#d7dfe9')};
  padding: 10px 30px;
  outline: none;
  border-style: solid;
  border-color: ${props => (props.mode === 'dark' ? '#212121' : '#d7dfe9')};
  border-left-style: none;
`
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
