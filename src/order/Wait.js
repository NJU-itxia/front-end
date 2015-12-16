import React from 'react';
import { Row, Col, ListGroup, ListGroupItem, Badge, Panel,
  ButtonToolbar, Button, Collapse, Input } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";
import { Link } from "react-router";


class ITxiaPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Panel header={<h3>苏小刚</h3>} bsStyle="warning">
        <p><strong>提交时间: </strong>2015-11-10 15:13:08</p>
        <p><strong>手机号码: </strong><a href="tel:15298386957">15298386957</a></p>
        <p><strong>百合帐号: </strong>09xmsxg</p>
        <p><strong>电脑型号: </strong>联想Y450</p>
        <p><strong>操作系统: </strong>win7-32</p>
        <p><strong>问题描述: </strong>运行一段时间自动关机（1小时、10分钟不等）。上学期因为开不了机在IT侠工作室修过。</p>
        <ButtonToolbar>
          <Button bsStyle="info">我来处理</Button>
          <Button onClick={ ()=> this.setState({ open: !this.state.open })}>展开回复信息 (0)</Button>
        </ButtonToolbar>
        <Collapse in={this.state.open}>
          <div>
            <br />
            <Input type="textarea" placeholder="请输入回复内容……" />
            <Button bsStyle="primary" block>回复</Button>
          </div>
        </Collapse>
      </Panel>
    );
  }
}

export default class Wait extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>等待处理</h1>
          <hr className="colorgraph" />
        </div>
        <Row>
          <Col xs={12} sm={3}>
            <ListGroup>
                <Link to="/knight/wait" className="list-group-item list-group-item-warning" activeClassName="">
                  等待处理<Badge>11</Badge>
                </Link>
                <Link to="/knight/setting" className="list-group-item" activeClassName="">
                  正在处理<Badge>3</Badge>
                </Link>
                <Link to="/logout" className="list-group-item" activeClassName="">
                  处理完成<Badge>1302</Badge>
                </Link>
            </ListGroup>
          </Col>
          <Col xs={12} sm={6}>
            <ITxiaPanel />
          </Col>
        </Row>
      </div>
    )
  }
}
