import React, {useState} from 'react'

function Tag({title}) {
  const [hover, setHover] = useState(false)
  return (
    <span className={
        "tag " +
        (hover ? 'hover_tag' : '')
      }
      onMouseEnter={ () => setHover(true)}
      onMouseLeave={ () => setHover(false) }
      >
      {title}
    </span>
  )
}

export default Tag
