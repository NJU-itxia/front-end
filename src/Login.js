import React from 'react';
import { Row, Col, ButtonInput, Image, Navbar, Nav, NavItem, Glyphicon, Input } from "react-bootstrap";
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";
import cookie from 'react-cookie';


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone_number: ""
    };
  }

  validationState() {
    let length = this.state.phone_number.length;
    let reg = /^(13|14|15|17|18)[0-9]{9}$/;

    if (length > 0 && reg.test(this.state.phone_number)) {
      return 'success';
    } else if ( length > 0 && !reg.test(this.state.phone_number)) {
      return 'warning'
    };
  }

  handleStudentLogin() {
    cookie.save('userLoggedIn', true, {path: '/'});
    cookie.save('studentLoggedIn', true, {path: '/'});
    cookie.save('userPhoneNumber', this.state.phone_number, {path: '/'});
  }

  render() {
    return (
      <div>
        <h1>登录</h1>
        <hr className="colorgraph" />
        <Row>
          <Col xs={12} sm={4} smOffset={4}>
            <Image src="/public/img/logo.jpg" responsive style={{ margin: 'auto', marginBottom: 20 }}/>
            <Input
              type="text"
              value={this.state.phone_number}
              placeholder="您的 11 位手机号码"
              help={<p><Glyphicon glyph="question-sign"/> 请使用您的<strong>手机号码</strong>直接登录，无需注册。我们稍后会通过此号码以及本站的回复系统与您联系。</p>}
              bsStyle={this.validationState()}
              bsSize="large"
              hasFeedback
              ref="input"
              groupClassName="group-class"
              labelClassName="label-class"
              onChange={() => this.setState({phone_number: this.refs.input.getValue()}) } />
            <LinkContainer to="/order" onClick={this.handleStudentLogin.bind(this)} disabled={ !(this.validationState() == 'success') }>
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
