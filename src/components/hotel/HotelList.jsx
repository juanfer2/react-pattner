import React from 'react'

import CardWrapped from '../cards/CardWrapped'
function HotelList() {
  return (
    <div className="hotel_list">
      <CardWrapped type={'card_carrousel'} />
      <CardWrapped type={'card_carrousel'} />
      <CardWrapped type={'card_carrousel'} />
      <CardWrapped type={'card_carrousel'} />
      <CardWrapped type={'card_carrousel'} />
    </div>
  )
}

export default HotelList
