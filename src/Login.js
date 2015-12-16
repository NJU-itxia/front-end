import React from 'react';
import { Row, Col, ButtonInput, Image, Navbar, Nav, NavItem, Glyphicon, Input } from "react-bootstrap";
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value          : "",
      submitClickable: false
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
                value={this.state.value}
                placeholder="手机号"
                help={<p><Glyphicon glyph="question-sign"/> 手机号直接登录，无需注册。</p>}
                bsStyle={this.validationState()}
                bsSize="large"
                hasFeedback
                ref="input"
                groupClassName="group-class"
                labelClassName="label-class"
                onChange={() => this.setState({value: this.refs.input.getValue()}) } />
              <ButtonInput type="submit" bsStyle="primary" value="登录" block disabled={ !(this.validationState() == 'success') } />
            </form>
          </Col>
        </Row>
      </div>
    )
  }
}
