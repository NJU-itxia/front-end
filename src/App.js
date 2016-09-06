import React from 'react';
import {Navbar, Nav, NavItem, Glyphicon} from "react-bootstrap";
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";
import cookie from 'react-cookie';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentLoggedIn: false,
      itxiaLoggedIn: false,
      adminLoggedIn: false,
      userLoggedIn: false
    };
  }

  checkCookie() {
    if (cookie.load('studentLoggedIn')) {
      this.setState({studentLoggedIn: true, userLoggedIn: true});
    } else if (cookie.load('itxiaLoggedIn')) {
      if (cookie.load('adminLoggedIn')) {
        this.setState({adminLoggedIn: true});
      }
      this.setState({itxiaLoggedIn: true, userLoggedIn: true});
    }
  }

  componentDidMount() {
    this.checkCookie();
  }

  componentWillReceiveProps() {
    this.checkCookie();
  }

  handleLogout() {
    cookie.remove('userLoggedIn', {path: '/'});
    cookie.remove('studentLoggedIn', {path: '/'});
    cookie.remove('itxiaLoggedIn', {path: '/'});
    cookie.remove('adminLoggedIn', {path: '/'});
    this.setState({
      studentLoggedIn: false,
      itxiaLoggedIn: false,
      adminLoggedIn: false,
      userLoggedIn: false
    })
  }

  render() {
    var navbarLogin = (
      <Nav>
        <LinkContainer to="/login">
          <NavItem><Glyphicon glyph="user" /> 学生登录</NavItem>
        </LinkContainer>
        <LinkContainer to="/knight/login">
          <NavItem><Glyphicon glyph="wrench" /> 后台管理</NavItem>
        </LinkContainer>
      </Nav>
    );
    var navbarStudent = (
      <Nav>
        <LinkContainer to="/order">
          <NavItem><Glyphicon glyph="list-alt" /> 当前预约</NavItem>
        </LinkContainer>
        <LinkContainer to="/history">
          <NavItem><Glyphicon glyph="th-list" /> 历史预约</NavItem>
        </LinkContainer>
      </Nav>
    );
    var navbarAdmin = (
      <LinkContainer to="/knight/setting">
        <NavItem><Glyphicon glyph="cog" /> 设置</NavItem>
      </LinkContainer>
    );
    var navbarITXia = (
      <Nav>
        <LinkContainer to="/knight/wait">
          <NavItem><Glyphicon glyph="list-alt" /> 处理请求</NavItem>
        </LinkContainer>
        <LinkContainer to="/knight/message">
          <NavItem><Glyphicon glyph="comment" /> 最近回复</NavItem>
        </LinkContainer>
        {this.state.adminLoggedIn ? navbarAdmin : null}
      </Nav>
    );
    var navbarLogout = (
      <Nav pullRight>
        <LinkContainer to="/logout" onClick={this.handleLogout.bind(this)}>
          <NavItem><Glyphicon glyph="log-out" /> 登出</NavItem>
        </LinkContainer>
      </Nav>
    );

    return (
      <div>
        <Navbar>
          <Navbar.Header className='navbar-header'>
            <Navbar.Brand>
            <IndexLinkContainer to='/login'>
              <a>南京大学 IT 侠预约处理系统</a>
            </IndexLinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            {!this.state.userLoggedIn ? navbarLogin : null}
            {this.state.studentLoggedIn ? navbarStudent : null}
            {this.state.itxiaLoggedIn ? navbarITXia : null}
            {this.state.userLoggedIn ? navbarLogout : null}
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
