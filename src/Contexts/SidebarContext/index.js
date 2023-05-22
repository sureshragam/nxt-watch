import {createContext} from 'react'

const SidebarContext = createContext({
  activeTab: '',
  onChangeSidebarOption: () => {},
})

export default SidebarContext
