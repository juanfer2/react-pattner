import React from 'react'
/* */
import { tags } from '../../storage'
/* Components */
import HotelList from '../hotel/HotelList'
import TagList from '../tags/TagList'

function Home(props) {

  const {city} = props

  return (
    <div className="home" >
      <span className="subtitle" > Más de 300 alojamientos </span>
      <h1 className="title" >Estadías en {city} </h1>
      <TagList data={tags} />
      <HotelList  />
    </div>
  )
}

export default Home
