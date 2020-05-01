import React from 'react'

/* */
import Tag from './Tag'

function TagList({data}) {
  return (
    <div className="tag_list">
      {data.map( (tag, i) =>  <Tag key={i} title={tag} />)}
    </div>
  )
}

export default TagList
