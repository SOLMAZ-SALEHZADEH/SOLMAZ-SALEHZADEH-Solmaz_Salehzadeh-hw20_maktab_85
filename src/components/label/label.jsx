import React from 'react'

function label({label,requierd}) {
  return (
    <p>{label}{requierd && "*"}</p>
  )
}

export default label