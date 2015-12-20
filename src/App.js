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
            <IndexLinkContainer to='/knight/wait'>
              <a>南京大学 IT 侠预约处理系统</a>
            </IndexLinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/knight/login">
                <NavItem><Glyphicon glyph="wrench" /> 后台管理</NavItem>
              </LinkContainer>
              <IndexLinkContainer to="/login">
                <NavItem><Glyphicon glyph="user" /> 学生登录</NavItem>
              </IndexLinkContainer>
              <LinkContainer to="/order">
                <NavItem><Glyphicon glyph="list-alt" /> 当前请求</NavItem>
              </LinkContainer>
              <LinkContainer to="/history">
                <NavItem><Glyphicon glyph="th-list" /> 历史请求</NavItem>
              </LinkContainer>
              <LinkContainer to="/knight/wait">
                <NavItem><Glyphicon glyph="list-alt" /> 处理请求</NavItem>
              </LinkContainer>
              <LinkContainer to="/knight/message">
                <NavItem><Glyphicon glyph="comment" /> 最近回复</NavItem>
              </LinkContainer>
              <LinkContainer to="/knight/setting">
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
