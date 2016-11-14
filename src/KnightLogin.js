import React from 'react';
import { Row, Col, ButtonInput, Image, Navbar, Nav, NavItem, Glyphicon, Input } from "react-bootstrap";
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";
import cookie from 'react-cookie';


export default class KnightLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleITXiaLogin(e) {
    e.preventDefault;
    cookie.save('userLoggedIn', true, {path: '/'});
    cookie.save('itxiaLoggedIn', true, {path: '/'});
    cookie.save('adminLoggedIn', true, {path: '/'}); // TODO 检查 IT 侠是否是管理员
    this.setState({itxiaName: 'itxiaName'}); // 将 IT 侠的姓名设定为 state 变量
  }

  render() {
    return (
      <div>
        <h1>登录</h1>
        <hr className="colorgraph" />
        <Row>
          <Col xs={12} sm={4} smOffset={4}>
            <Image src="/img/logo.jpg" responsive style={{ margin: 'auto', marginBottom: 20 }}/>
            <Input
              type="text"
              value={this.state.username}
              placeholder="用户名"
              bsSize="large"
              ref="username"
              groupClassName="group-class"
              labelClassName="label-class"
              required
              onChange={() => this.setState({username: this.refs.username.getValue()}) } />
            <Input
              type="password"
              value={this.state.password}
              placeholder="密码"
              bsSize="large"
              ref="password"
              groupClassName="group-class"
              labelClassName="label-class"
              required
              onChange={() => this.setState({password: this.refs.password.getValue()}) } />
            <LinkContainer to="/knight/wait" onClick={this.handleITXiaLogin.bind(this)}>
              <ButtonInput
                bsStyle="primary"
                value="登录"
                block />
            </LinkContainer>
          </Col>
        </Row>
      </div>
    )
  }
}
