import React from 'react';
import { Row, Col, Button, Image, Glyphicon, FormGroup, FormControl, HelpBlock, ControlLabel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import cookie from 'react-cookie';

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
						<FormGroup>
							<FormControl
								type="text"
								value={account}
								placeholder="您的 11 位手机号码"
								bsStyle={this.validateState()}
								bsSize="large"
								onChange={this.handleAccountChange}
							/>
							<HelpBlock>
								<p><Glyphicon glyph="question-sign"/> 请使用您的<strong>手机号码</strong>直接登录，无需注册。我们稍后会通过此号码以及本站的回复系统与您联系。</p>
							</HelpBlock>
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
							onClick={this.handleFormSubmit.bind(this)}
							bsStyle="primary"
							block
						>
						登陆
						</Button>
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
