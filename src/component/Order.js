import moment from 'moment';
import React, { Component } from "react";

import { Panel, ButtonToolbar, Button, Input, Collapse } from "react-bootstrap";
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";
import { Link } from "react-router";

export default class Order extends Component
{
	constructor(args)
	{
		super(args);

	}

	static PropTypes = {
		style: React.PropTypes.string
	}
	// style primary success info warning link
	static defaultProps = {
		style: "warning"
	}

	state = {
		name: "IT侠: demo",
		createdTime:"2016-10-21 18:19:40",
		phoneNumber: 1111111,
		bbsId: "小白和账号",
		machineModel: "联想",
		OS: "window 10",
		description: "暂无",
		messages: [ {
			userName: "test",
			time:"2016-10-21 18:19:40",
			content: "just a test message"
		}, {
			userName: "test",
			time:"2016-10-21 18:19:40",
			content: "just a test message"
		}],
		messageViewStatus: false,

	}

	render()
	{
		const $messages = this.state.messages.map((item, index) => {
			return (<div key={ index } className="item-content">
					<div className="header-info"><strong>{ item.userName }</strong> { item.time }</div>
					<div className="content"> { item.content }</div>
			</div>);
		})
		return (<Panel className={ this.props.className } header={<h3>{this.state.name}</h3>} bsStyle={ this.props.style}>
			<p><strong>提交时间: </strong>{ this.state.createdTime }</p>
			<p><strong>手机号码: </strong><a href={"tel:" + this.state.phoneNumber}>{this.state.phoneNumber}</a></p>
			<p><strong>百合帐号: </strong>{this.state.bbsId}</p>
			<p><strong>电脑型号: </strong>{this.state.machineModel}</p>
			<p><strong>操作系统: </strong>{this.state.OS}</p>
			<p><strong>问题描述: </strong>{this.state.description}</p>
			{/* <p><strong>时间: </strong>{moment().utcOffset(0).format('ddd, DD MMM YYYY HH:mm:ss [GMT]')}</p>
			<p><strong>时间: </strong>{moment().utcOffset(0).utcOffset(8).format('YYYY-MM-DD HH:mm:ss')}</p> */}
			<ButtonToolbar>
				<Button bsStyle="info" onClick={ this._handleDeeperDeal.bind(this) }>我来处理</Button>
				<Button onClick={ this._handleReplyMessageShow.bind(this) }>
					{ this.state.messageViewStatus ? "收起回复信息(" + this.state.messages.length + ")"  : "展开回复信息(" + this.state.messages.length + ")" }
				</Button>
			</ButtonToolbar>
			<Collapse refs="order-message-view" in={ this.state.messageViewStatus }>
				<div className="message-content">
					{ $messages }
					<Input type="textarea" placeholder="请输入回复内容……" />
					<Button bsStyle="primary" block>回复</Button>
				</div>
			</Collapse>
		</Panel>);
	}

	_handleReplyMessageShow()
	{
		const status = !this.state.messageViewStatus;
		this.setState({ messageViewStatus: status });
	}

	_handleDeeperDeal()
	{
		alert("进行下一步处理");
	}

}
