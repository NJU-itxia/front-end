import React, { Component } from 'react';
import ReactDOM from "react-dom";

import {Navbar, Nav, NavItem, Glyphicon} from "react-bootstrap";

export default class ITxiaNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {activeKey: 1};
  }

  handleSelect(selectedKey) {
    this.setState({activeKey: selectedKey});
  }

  render() {
    return (
      <Navbar>
          <Navbar.Header className='navbar-header'>
            <Navbar.Brand>
              <a href='/'>南京大学 IT 侠预约处理系统</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav activeKey={this.state.activeKey} onSelect={this.handleSelect}>
              <NavItem eventKey={1} href="#"><Glyphicon glyph="list-alt" /> 处理请求</NavItem>
              <NavItem eventKey={2} href="#"><Glyphicon glyph="comment" /> 最近回复</NavItem>
              <NavItem eventKey={3} href="#"><Glyphicon glyph="cog" /> 设置</NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={4} href="#"><Glyphicon glyph="log-out" /> 登出</NavItem>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
  }
}
