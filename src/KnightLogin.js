import React from 'react';
import { Row, Col, ButtonInput, Image, Navbar, Nav, NavItem, Glyphicon, Input } from "react-bootstrap";
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";


export default class KnightLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  validationState() {
    let length = this.state.value.length;
    let reg = /^(13|14|15|17|18)[0-9]{9}$/;

    if (length > 0 && reg.test(this.state.value)) {
      return 'success';
    } else if ( length > 0 && !reg.test(this.state.value)) {
      return 'warning'
    };
  }

  render() {
    return (
      <div>
        <h1>登录</h1>
        <hr className="colorgraph" />
        <Row>
          <Col xs={12} sm={4} smOffset={4}>
            <Image src="/public/img/logo.jpg" responsive style={{ margin: 'auto', marginBottom: 20 }}/>
            <form>
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
              <ButtonInput type="submit" bsStyle="primary" value="登录" block />
            </form>
          </Col>
        </Row>
      </div>
    )
  }
}
