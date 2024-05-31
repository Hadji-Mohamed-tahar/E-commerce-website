import React from 'react'
import Header1 from './header1/Header1'
import Header2 from './header2/Header2'
import Header3 from './header3/Header3'
import "./Header.css"
const Header = () => {
  return (
    <div className='Header'>
    <Header1/>
    <Header2/>
    {/* <Header3/> */}
    </div>
  )
}

export default Header