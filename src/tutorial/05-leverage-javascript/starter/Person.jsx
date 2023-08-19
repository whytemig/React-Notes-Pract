import { people } from '../../../data'

import React from 'react'

const Person = ({ name, nickname, images }) => {



    const img = images?.[0]?.small?.url || 'https://placewaifu.com/image/20'

  return (
      <div>
          <img src={img} alt={ name}  style={{width:'50px'}}/>
          <h2>{name}</h2>
          <p>Nickname: {nickname || 'Jon' }</p>
    </div>
  )
}

export default Person