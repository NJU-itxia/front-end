import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Glyphicon } from "react-bootstrap";
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";

const style = {
	"marginBottom": 0
};

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar style={ style }>
          <Navbar.Header className='navbar-header'>
            <Navbar.Brand>
            <IndexLinkContainer to='/login'>
              <a>南京大学 IT 侠预约处理系统</a>
            </IndexLinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/knight/wait">
                <NavItem><Glyphicon glyph="list-alt" /> 处理请求</NavItem>
              </LinkContainer>
              <LinkContainer to="/knight/message">
                <NavItem><Glyphicon glyph="comment" /> 最近回复</NavItem>
              </LinkContainer>
              {this.state.adminLoggedIn ? navbarAdmin : null}
            </Nav>
            <Nav pullRight>
              <LinkContainer to="/logout" onClick={this.handleLogout.bind(this)}>
                <NavItem><Glyphicon glyph="log-out" /> 登出</NavItem>
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
    )
  }
}
