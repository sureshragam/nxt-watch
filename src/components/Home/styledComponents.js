import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 100vh;
  background-color: ${props => (props.mode === 'dark' ? '#181818' : '#f9f9f9')};
`
export const HomeContent = styled.div`
  display: flex;
  justify-content: space-between;
  height: 93%;
`
export const Content = styled.div`
  flex-basis: 82%;
  height: 100%;
  background-color: ${props => (props.mode === 'dark' ? '#0f0f0f' : '#f1f5f9')};
`
export const BannerContainer = styled.div`
  height: 200px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-position: right;
  padding: 10px 20px;
  display: ${props => (props.show === 'noBanner' ? 'none' : null)};
`
export const BannerLogo = styled.img`
  width: 130px;
`
export const Para = styled.p``
export const CustomButton = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  background-color: transparent;
`
export const CloseButton = styled.button`
  margin-left: auto;
  background-color: transparent;
  border-style: none;
  display: block;
  position: relative;
  top: -30px;
  cursor: pointer;
`
