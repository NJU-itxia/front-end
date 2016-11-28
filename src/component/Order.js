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

	}

	static defaultProps = {

	}

	state = {
		name: "IT侠: demo",
		createdTime:"2016-10-21 18:19:40",
		phoneNumber: 1111111,
		bbsId: "小白和账号",
		machineModel: "联想",
		OS: "window 10",
		description: "暂无",
		messageViewStatus: false,

	}

	render()
	{
		//moment(this.props.order._created).utcOffset(8).format('YYYY-MM-DD HH:mm:ss')
		return (<Panel className={ this.props.className } header={<h3>{this.state.name}</h3>} bsStyle="warning">
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
				<Button disabled onClick={ this._handleReplyMessageShow.bind(this) }>展开回复信息 (0)</Button>
			</ButtonToolbar>
			<Collapse refs="order-message-view" in={ this.state.messageViewStatus }>
				<div>
					<br />
					<Input type="textarea" placeholder="请输入回复内容……" />
					<Button bsStyle="primary" block>回复</Button>
				</div>
			</Collapse>
		</Panel>);
	}

	_handleReplyMessageShow()
	{
		this.setState({ messageViewStatus: !this.state.messageViewStatus });
	}

	_handleDeeperDeal()
	{
		alert("进行下一步处理");
	}

}
