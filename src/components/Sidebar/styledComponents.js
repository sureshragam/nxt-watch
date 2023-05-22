import styled from 'styled-components'

export const SidebarContainer = styled.div`
  flex-basis: 18%;
  padding: 10px 10px;
  height: 100%;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.mode === 'dark' ? '#212121' : 'white')};
`
export const SidebarOptions = styled.ul`
  padding-left: 0px;
`

export const SidebarOption = styled.li`
  list-style-type: none;
  display: block;
  margin-bottom: 25px;
  font-size: 20px;
  background-color: ${props => (props.active ? '#d7dfe9' : 'transparent')};
  cursor: pointer;
  padding: 5px 10px;
  height: 40px;
  width: 100%;
`
export const Contact = styled.div`
  padding: 10px 10px;
  color: ${props => (props.mode === 'dark' ? 'white' : 'black')};
`
export const Heading = styled.p`
  font-size: 18px;
`
export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`
export const SocialIcon = styled.img`
  width: 30px;
`
export const Para = styled.p``
