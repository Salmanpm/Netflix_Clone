import React from 'react'
import Navbar from './Components/NavBar/Navbar'
import Banner from './Components/Banner/Banner'
import Rowpost from './Components/Rowpost/Rowpost'
import {originals,action, comedy, horror, romance, documentaries } from './urls'

function Home() {
  return (
    <div>
    <Navbar/>
    <Banner/>
    <Rowpost url={originals} title='Netflix Originals' />
    <Rowpost url={action} title='Action Movies' isSmall />
    <Rowpost url={comedy} title='Comedy Movies' isSmall />
    <Rowpost url={horror} title='Horror Movies' isSmall />
    <Rowpost url={romance} title='Romantic Movies' isSmall />
    <Rowpost url={documentaries} title='Documentaries' isSmall />
    </div>
  )
}

export default Home
