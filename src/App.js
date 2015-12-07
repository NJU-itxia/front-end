import React from 'react';
import {Navbar, Nav, NavItem, Glyphicon} from "react-bootstrap";
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header className='navbar-header'>
            <Navbar.Brand>
            <IndexLinkContainer to='/wait'>
              <a>南京大学 IT 侠预约处理系统</a>
            </IndexLinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/wait">
                <NavItem><Glyphicon glyph="list-alt" /> 处理请求</NavItem>
              </LinkContainer>
              <LinkContainer to="/message">
                <NavItem><Glyphicon glyph="comment" /> 最近回复</NavItem>
              </LinkContainer>
              <LinkContainer to="/setting">
                <NavItem><Glyphicon glyph="cog" /> 设置</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
              <LinkContainer to="/logout">
                <NavItem><Glyphicon glyph="log-out" /> 登出</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      <div className="container">
        {this.props.children}
      </div>
      </div>
    )
  }
}
