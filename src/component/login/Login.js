import React, { Component, PropTypes } from 'react';
import { Navbar, Nav, NavItem, Glyphicon } from "react-bootstrap";
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";

const style = {
	"marginBottom": 0,
};

export default class Login extends Component {
	static propTypes = {
		children: PropTypes.element.isRequired,
	}

  render() {
		console.log("login app");
    return (
      <div>
        <Navbar style={style}>
          <Navbar.Header className="navbar-header">
            <LinkContainer to="/login">
							<Navbar.Brand>
	              <a>南京大学 IT 侠预约处理系统</a>
							</Navbar.Brand>
            </LinkContainer>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/login/student">
                <NavItem><Glyphicon glyph="user" /> 学生登录</NavItem>
              </LinkContainer>
              <LinkContainer to="/login/knight">
                <NavItem><Glyphicon glyph="wrench" /> 后台管理</NavItem>
              </LinkContainer>
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
}
