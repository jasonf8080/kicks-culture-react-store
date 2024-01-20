import React from 'react'

const Loader = ({classProp}) => {
  return (
   <div class={`${classProp} loader`}>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
    </div>
  )
}

export default Loader