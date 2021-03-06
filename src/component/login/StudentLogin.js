import React from 'react';
import { message } from 'antd';
import { Row, Col, Button, Image, Glyphicon, FormGroup, FormControl, HelpBlock } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { browserHistory } from 'react-router';

import model from '../../model/student';

export default class Login extends React.Component {
  state = {
    account: '',
    password: '',
  };

  render() {
    const { account, password } = this.state;
    return (
      <div>
        <h1>登录</h1>
        <hr className="colorgraph" />
        <Row>
          <Col xs={12} sm={4} smOffset={4}>
            <Image
							src="/img/logo.jpg"
							responsive
							style={{ margin: 'auto', marginBottom: 20 }}
						/>
            <form onSubmit={this.handleFormSubmit}>
              <FormGroup>
                <FormControl
                  type="text"
                  value={account}
                  placeholder="您的 11 位手机号码"
                  bsStyle={this.validateState()}
                  bsSize="large"
                  onChange={this.handleAccountChange}
                  autoFocus={true}
                />
                <HelpBlock>
                  <p><Glyphicon glyph="question-sign"/> 请使用您的<strong>手机号码</strong>直接登录，无需注册。我们稍后会通过此号码以及本站的回复系统与您联系。</p>
                </HelpBlock>
              </FormGroup>
              <FormGroup>
                <FormControl
                  type="password"
                  value={password}
                  placeholder="您的密码"
                  bsSize="large"
                  onChange={this.handlePasswordChange}
                />
              </FormGroup>
              <Button
                disabled={!this.validateState()}
                type="submit"
                bsStyle="primary"
                block
              >
              登陆
              </Button>
            </form>
          </Col>
        </Row>
      </div>
    );
  }

  handleAccountChange = (e) => {
    this.setState({
      account: e.target.value,
    });
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  }

  handleFormSubmit = (e) => {
		model.login(this.state.account, this.state.password)
      .then((response) => {
        if (response.code === 1) {
          browserHistory.push('/student/order');
        } else {
          message.error(response.message);
        }
		  });
    e.preventDefault();
  }

	validateState() {
		let length = this.state.account.length;
		let reg = /^(13|14|15|17|18)[0-9]{9}$/;

		if (length > 0 && reg.test(this.state.account)) {
			return 'success';
		} else if ( length > 0 && !reg.test(this.state.account)) {
			return 'warning';
		}
	}
}
