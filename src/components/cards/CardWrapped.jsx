import React from 'react';

/*Components */
import CardCarrousel from './cardsComponents/cardCarrousel/CardCarrousel'
import CardDefault from './cardsComponents/cardDefault/CardDefault'

function CardWrapped(props) {
  const { type } = props
  switch (type) {
    case 'card_carrousel':
      return <CardCarrousel className='card' {...props} />
    case 'card_image':
      return <CardDefault className='card' {...props} />
    default:
      return <CardDefault className='card' {...props} />
  }
}

export default CardWrapped
