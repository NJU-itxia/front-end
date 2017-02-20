import React, { Component, PropTypes } from 'react';
import { Row, Col, Button, Image, Glyphicon, FormGroup, FormControl, HelpBlock, ControlLabel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import knightModel from '../../model/knightModel';

export default class Login extends Component {
  state = {
    account: '',
    password: '',
  };

  render() {
    const { account, password } = this.state;
    let submitAccess = true;
    if (account && password && account.length > 0 && password.length > 0) {
      submitAccess = false;
    }
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
								placeholder="用户名"
								bsSize="large"
								onChange={this.handleAccountChange}
							/>
							<HelpBlock>
                {submitAccess ? <p><Glyphicon glyph="question-sign"/>用户名、密码不能为空</p> : null}
								<p><Glyphicon glyph="question-sign"/>开发账号密码为test</p>
							</HelpBlock>
						</FormGroup>
						<FormGroup>
							<FormControl
								type="password"
								value={password}
								placeholder="密码"
								bsSize="large"
								onChange={this.handlePasswordChange}
							/>
						</FormGroup>
						<Button
							onClick={this.handleFormSubmit}
							bsStyle="primary"
							block
              disabled={submitAccess}
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
    // TODO
    knightModel.login(this.state.account, this.state.password).then(data => {
      console.log(data, 'knight1');
    });
  }
}
