import React, { Component, PropTypes } from 'react';
import { Navbar, Nav, NavItem, Glyphicon } from "react-bootstrap";
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";

const style = {
	"marginBottom": 0
};

class Student extends Component {
  render() {
    return (
      <div>
        <Navbar style={style}>
          <Navbar.Header className='navbar-header'>
            <IndexLinkContainer to='/login'>
							<Navbar.Brand>
              	<a href="/">南京大学 IT 侠预约处理系统</a>
							</Navbar.Brand>
            </IndexLinkContainer>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/student/order">
                <NavItem><Glyphicon glyph="list-alt" /> 当前预约</NavItem>
              </LinkContainer>
              <LinkContainer to="/student/history">
                <NavItem><Glyphicon glyph="th-list" /> 历史预约</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
              <NavItem><Glyphicon glyph="log-out" /> 登出</NavItem>
            </Nav>
          </Navbar.Collapse>
      	</Navbar>
	      <div className="container">
	        {this.props.children}
	      </div>
	      <footer className="page-footer">
	        <div className="container">
	          <hr className="colorgraph" />
	          <p className="text-center">Designed and built by LC &amp; 南京大学 IT 侠工作室</p>
	        </div>
	      </footer>
      </div>
    );
  }

	handleLogout = () => {

	}
}

export default Student;
