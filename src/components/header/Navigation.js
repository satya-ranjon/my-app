import React from 'react';
import {
     Collapse,
     Navbar,
     NavbarToggler,
     NavbarBrand,
     Nav,
     NavItem,
     NavLink,
     UncontrolledDropdown,
     DropdownToggle,
     DropdownMenu,
     DropdownItem,
     NavbarText
   } from 'reactstrap';
   
   const Navigation = (props) => {
     return(
          <div>
               <Navbar color="dark" dark expand="md" className='fixed-top'>
               <div className='container'> 
                    <NavbarBrand herf='/' >
                         Soping SaraBala
                    </NavbarBrand>
                    <Nav className="mr-auto" navbar> 
                         <NavItem>
                              <NavLink herf='/'>
                                   Home
                              </NavLink>
                         </NavItem>
                         <NavItem>
                              <NavLink herf='/'>
                                   Blog
                              </NavLink>
                         </NavItem>
                         <NavItem>
                              <NavLink herf='/'>
                                   Contact
                              </NavLink>
                         </NavItem>

                    </Nav>
               </div>
               </Navbar>
          </div>
     )
     
   }
   
   export default Navigation;