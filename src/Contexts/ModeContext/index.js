import {createContext} from 'react'

const ModeContext = createContext({
  isDarkMode: '',
  onToggleMode: () => {},
})

export default ModeContext
