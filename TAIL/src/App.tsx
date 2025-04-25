import Navbar from './Navbar'
import { useDarkMode } from './assets/hooks/useDarkMode'
import Perfil from './Perfil'
//import Botones from './Botones'
import './App.css'

function App() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  

  return (
   
      <div>
          <Navbar></Navbar>
          <Perfil/>
          <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
    >
      {isDarkMode ? '☀️ Light' : '🌙 Dark'}
    </button>
      </div>
  )
}

export default App
