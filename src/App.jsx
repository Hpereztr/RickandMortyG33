
import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './utils/getRandomNumber'
import LocationCard from './components/LocationCard'
import ResidentCard from './components/ResidentCard'
import descarga from './assets/IMG/descarga.jpg'

function App() {
  const locationId = getRandomNumber(126)
  const [inputValue, setInputValue] = useState(locationId)
  const url = `https://rickandmortyapi.com/api/location/${inputValue}`
  const [ location, getLocation, hasError ] = useFetch(url)
  
  useEffect(() => {
    getLocation()
  },[inputValue])

  const inputLocation = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setInputValue(inputLocation.current.value)
  }
  return (
    <div className='resident__location'>
      <header className='header__p'>
        <img src={descarga} height={300}  />
      </header>
      <form  onSubmit={handleSubmit}>
        <input className='search' ref={inputLocation} type="text" />
        <button className='search__button' >Search</button>
      </form>
      {
        hasError
        ? <h2>Hey! you must Provide an id from 1 to 120</h2>
        : (
          <>
          <LocationCard 
        location={location}
      />
      <div className='resident__container'>
        {
          location?.residents.map(url => (
            <ResidentCard
              key={url}
              url={url}
            />
          ))
        }
        </div>
      </>
      )
    }
      
    </div>
  )
}

export default App
