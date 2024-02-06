import Hightlights from './components/Hightlights'
import SideBar from './components/SideBar'
import './index.css'

function App() {

  return (
    <div className='bg-slate-100 w-[100vw] h-[100vh] flex'>
      <SideBar/>
      <div className='p-8'>
        <Hightlights />
      </div>
    </div>
  )
}

export default App
