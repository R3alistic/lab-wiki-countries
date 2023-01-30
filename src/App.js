import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'

function App() {
  const [country, setCountry] = useState([])

  useEffect(() => {
    axios.get("https://ih-countries-api.herokuapp.com/countries")
      .then((resp) => {
        setCountry(resp.data)
        console.log(resp)
      })
  }, [])

  return (
    <div className="App">
      <Navbar className="navbar" />
      <Routes>
        <Route path='/' element={<div><CountriesList country={country} setCountry={setCountry} /></div>} />
        <Route path='/:countryId' element={
          <div>
            <CountryDetails country={country} setCountry={setCountry} />
            <CountriesList country={country} setCountry={setCountry} />
          </div>
        }
        />
      </Routes>
    </div>
  )
}

export default App;
