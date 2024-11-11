import Navigation from './components/Navigation/Navigation'
import Search from './components/Search/Search'
import './index.css'

function App() {
  return (
    <div className="w-full h-screen text-center dark:bg-black duration-500">
      <div className="container max-w-screen-md mx-auto h-screen ">
        <Navigation />
        <Search />
      </div>
    </div>
  )
}

export default App
