import React, {Component} from 'react'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'
  
export default class AppNavbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar dark expand="md" className="bg-dark">
          <NavbarBrand href="/">App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {/* put any navbar item code here */}
               <NavItem>
              <NavLink href="/settings">Settings</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/messages">Send Messages</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/reports">Reports</NavLink>
            </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}