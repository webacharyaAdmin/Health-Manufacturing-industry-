import React from 'react'

const Card = ({number,details}) => {
  return (
    <div>
      <div>
        <label>{number}</label>
        <label>{details}</label>
      </div>
    </div>
  )
}

export default Card
