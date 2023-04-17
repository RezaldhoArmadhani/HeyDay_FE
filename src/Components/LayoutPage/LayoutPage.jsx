import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import style from './layoutMain.module.css'

const LayoutPage = ({children}) => {
  return (
    <div className={style['main-wrapper']}>
        <Navbar/>
        <div className={`${style['content-wrapper']}`}>
           {children}
        </div>
        <Footer/>
    </div>
  )
}

export default LayoutPage