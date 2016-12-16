import { Component } from 'react';

export default class Login extends Component {
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
              <LinkContainer to="/login">
                <NavItem><Glyphicon glyph="user" /> 学生登录</NavItem>
              </LinkContainer>
              <LinkContainer to="/knight/login">
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
