import React, {useState, useEffect}  from 'react'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLeaf} from '@fortawesome/free-solid-svg-icons'
import { Button } from './Button'
import './Navbar.css'
const Navbar = () => {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)  

  const handleClick = () => {
      setClick(!click)
  }
  const closeMobileMenu = () =>{
      setClick(false)
  }
  const showButton = () => {
      if(window.innerWidth <= 960) {
          setButton(false)
      }else{
          setButton(true)
      }
  }
  useEffect(() => {
      showButton()
  }, [])

  window.addEventListener('resize', showButton)
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
        <Link to='/' className = 'navbar-logo' onClick={closeMobileMenu}>
            AgroPedia
            <FontAwesomeIcon icon={faLeaf}></FontAwesomeIcon>
                      
        </Link>
        <div className="menu-icon" onClick = {handleClick}>
            <i className={click ?'fas fa-times' : 'fas fa-bars'}></i>       
        </div>    
        <ul className={click? "nav-menu active" : 'nav-menu'}>
            <li className='nav-item'>        
                <Link to={'/'} className = 'nav-links' onClick={closeMobileMenu}>
                Home</Link>
            </li>
            <li className='nav-item'>        
                <Link to={'/Products'} className = 'nav-links' onClick={closeMobileMenu}>
                Products</Link>
            </li>
            <li className='nav-item'>        
                <Link to={'/Aboutus'} className = 'nav-links' onClick={closeMobileMenu}>
                About us</Link>
            </li>
            <li className='nav-item'>        
                <Link to={'/contact'} className = 'nav-links-mobile' onClick={closeMobileMenu}>
                Contact</Link>
            </li>
          
            
        </ul>  
        {button && <Button buttonStyle={'btn--outline'}>Contact</Button>}
        </div>    
      </nav>  
    </>
  )
}

export default Navbar