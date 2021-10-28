import React, { Component  } from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem, } from 'reactstrap';
import { Link, Route,Redirect } from "react-router-dom";
import Home from '../body/newitem/home';
import Body from '../body/body';
import New_item from '../body/newitem/new_item';
import NewForm from '../body/newitem/newForm';

   class Navigation extends Component{
     constructor(props) {
          super(props);
          this.state = {
              isNavOpen: false
          }
      }
  
      navToggle = () => {
          this.setState({
              isNavOpen: !this.state.isNavOpen
          })
      }

        render(){
             return(
                  <div>
                  <Navbar color="dark" expand='md' dark>
                       <div className='container text_align'>
                            <NavbarBrand >
                            <Link className='' to='/'>Draze</Link>
                            </NavbarBrand>
                            <NavbarToggler onClick={this.navToggle} />
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                 <Nav className="mr-auto" navbar >
                                      <NavItem>
                                           <Link  className='nav-link' to='/home'>Home</Link>
                                      </NavItem>
                                      <NavItem>
                                           <Link className='nav-link' to='/new-add'>New Add</Link>
                                      </NavItem>
                                      <NavItem>
                                           <Link className='nav-link' to='/new-form'>New Form</Link>
                                      </NavItem>
                                 </Nav>
                            </Collapse>
                       </div>
                  </Navbar>
                       <Route path='/' exact component={Body}  />
                       <Route path='/itemlist' exact component={Body}  />
                       <Route path='/home' exact component={Home}  />
                       <Route path='/new-add' exact component={New_item}  />
                       <Route path='/new-form' exact component={NewForm} />
                       <Redirect from='/' to='/itemlist' />
                  </div>
             )
        }
   }





   export default Navigation;

   