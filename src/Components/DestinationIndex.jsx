import React from 'react'

const DestinationIndex = (props) => {
  return (
   <div className="text-white">
    <h1 className="text-success text-center">TravelOPedia List</h1>
    {props.children}
   </div>
  )
}

export default DestinationIndex