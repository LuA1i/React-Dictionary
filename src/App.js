import Navigation from './components/Navigation/Navigation'
import Search from './components/Search/Search'
import axios from 'axios'
import './index.css'
import { useState } from 'react'
import InfoDisplay from './components/InfoDisplay/InfoDisplay'

function App() {
  const [input, setInput] = useState('')
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = async (word) => {
    setLoading(true)
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      )
      setData(response.data)
      setError(null)
    } catch (error) {
      setError(error.message || 'Something went wrong')
      setData(null)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = () => {
    if (input.trim()) {
      fetchData(input)
    }
  }

  return (
    <div className="w-full h-screen text-center dark:bg-black duration-500">
      <div className="container max-w-screen-md mx-auto h-screen ">
        <Navigation />
        <Search
          data={data}
          input={input}
          setInput={setInput}
          handleSearch={handleSearch}
          setLoading={loading}
          setError={error}
        />
        <InfoDisplay data={data} setLoading={loading} setError={error} />
      </div>
    </div>
  )
}

export default App
