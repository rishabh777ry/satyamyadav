import React, { useEffect, useRef } from 'react';
import { FaPhone } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import "./header.css";

const nav__links = [
   {
      path: '/home',
      display: 'Home'
   },
   {
      path: '/about',
      display: 'About'
   },
   {
      path: '/tours',
      display: 'Tours/Packages'
   },
]

const Header = () => {
   const headerRef = useRef(null)
   const menuRef = useRef(null)

   const stickyHeaderFunc = () => {
      window.addEventListener('scroll', () => {
         if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            headerRef.current.classList.add('sticky__header')
         } else {
            headerRef.current.classList.remove('sticky__header')
         }
      })
   }

   useEffect(() => {
      stickyHeaderFunc()

      return () => window.removeEventListener('scroll', stickyHeaderFunc)
   }, [])

   const toggleMenu = () => menuRef.current.classList.toggle('show__menu')

   return (
      <header className='header' ref={headerRef}>
         <Container>
            <Row>
               <div className="nav__wrapper d-flex align-items-center justify-content-between">
                  {/* ========== COMPANY NAME ========== */}
                  <div className="logo">
                     <h1>Mahakal Tour Planner</h1>
                  </div>
                  {/* ================================ */}

                  {/* ========== MENU START ========== */}
                  <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                     <ul className="menu d-flex align-items-center gap-5">
                        {
                           nav__links.map((item, index) => (
                              <li className="nav__item" key={index}>
                                 <NavLink to={item.path} className={navClass => navClass.isActive ? 'active__link' : ''}>{item.display}</NavLink>
                              </li>
                           ))
                        }
                        <li className="nav__item contact">
                           <a href="tel:+916266717993" className="contact__link">
                              <FaPhone /> +91 6266717993
                           </a>
                        </li>
                     </ul>
                  </div>
                  {/* ================================ */}

                  <div className="nav__right d-flex align-items-center gap-4">
                     <span className="mobile__menu" onClick={toggleMenu}>
                        <i className="ri-menu-line"></i>
                     </span>
                  </div>
               </div>
            </Row>
         </Container>
      </header>
   )
}

export default Header
