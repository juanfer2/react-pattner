import React from 'react'

import ItemCarrousel from './ItemCarrousel'

function Carrousel() {
  return (
    <div 
    className="carrousel">
      <div className="carrousel__slide" >
        <ItemCarrousel />
        <ItemCarrousel/>
        <ItemCarrousel/>
        <ItemCarrousel/>
      </div>
    </div>
  )
}

export default Carrousel
