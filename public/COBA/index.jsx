import React from 'react'
import style from './style.module.css'

const Coba = () => {
  const [hover, setHover] = useState(true)

  function MouseOver(event) {
    setHover(true)
  }
  function MouseOut(event){
    setHover(false)
  }

  {data.map((item, index) => (

    //When I hover parent div I want to show the {item.arrow} div inside and not all {item.arrow} divs in the loop

    <div key={index} onMouseEnter={MouseOver} onMouseLeave={MouseOut} className="flex gap-3">
      <div>
        {item.content}
      </div>
      
      <div hidden={hover}>
        {item.arrow}
      </div>
    </div>
  ))}
}

export default Coba