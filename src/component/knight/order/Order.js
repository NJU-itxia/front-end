import moment from 'moment';
import React, { Component, PropTypes } from "react";

import { Panel, ButtonToolbar, Button, InputGroup, Collapse, FormControl, DropdownButton, MenuItem} from "react-bootstrap";
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";
import { Link } from "react-router";

import OrderModel from './OrderModel';

export default class Order extends Component
{
  constructor(props) {
    super(props);
    this.styleMap = {
      "waiting": "warning",
      "dealing": "info",
      "completed": "primary"
    };
  }

	static PropTypes = {
    data: PropTypes.instanceOf(OrderModel).isRequired,
		type: PropTypes.string.isRequired
	}
	// style primary success info warning link
	static defaultProps = {
    data: null,
		type: null
	}

	state = {
		messageViewStatus: false,
		deleteBtnsStatus: []
	}

  componentWillReceiveProps(nextProps) {
    this.setState({
      messageViewStatus: false,
      deleteBtnsStatus: nextProps.data.messages.map(item => false)
    });
  }

	componentDidMount()
	{

	}

	render()
	{
    console.log(2);
    const order = this.props.data;
		const $messages = order.messages.map((item, index) => {
			return (<div key={ index } ref={index} className="item-content" onMouseOver={ () => this._handleDeleteBtnShow.bind(this)(index, true) } onMouseLeave={ () => this._handleDeleteBtnShow.bind(this)(index, false) } >
					<div className="header-info">
						<span ref={ "deleteBtn" + index } className={ "iconfont icon-cha " + (this.state.deleteBtnsStatus[index] ? "v-show" : "v-hide") } onClick={ () => this._handleDeleteMessage.bind(this)(index) }></span>
						<strong>{ item.userName }</strong> { item.time }</div>
					<div className="content"> { item.content }</div>
			</div>);
		})
		return (<Panel className={ this.props.className } header={<h3>{order.name}</h3>} bsStyle={ this.styleMap[this.props.type]}>
			<p><strong>提交时间: </strong>{ order.createdTime }</p>
			<p><strong>手机号码: </strong><a href={"tel:" + order.phoneNumber}>{order.phoneNumber}</a></p>
			<p><strong>百合帐号: </strong>{order.bbsId}</p>
			<p><strong>电脑型号: </strong>{order.machineModel}</p>
			<p><strong>操作系统: </strong>{order.OS}</p>
			<p><strong>问题描述: </strong>{order.description}</p>
			<ButtonToolbar>
				<Button bsStyle="info" onClick={ this._handleDeeperDeal.bind(this) }>我来处理</Button>
				<Button onClick={ this._handleReplyMessageShow.bind(this) }>
					{ this.state.messageViewStatus ? "收起回复信息(" + order.messages.length + ")"  : "展开回复信息(" + order.messages.length + ")" }
				</Button>
			</ButtonToolbar>
			<Collapse ref="order-message-view" in={ this.state.messageViewStatus }>
				<div className="message-content">
					{ $messages }
          <InputGroup className="order-reply">
            <FormControl type="textarea" placeholder="请输入回复内容……"/>
            <InputGroup.Addon className='btn-textarea'><Button bsStyle="primary" block>回复</Button></InputGroup.Addon>
          </InputGroup>
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

	_handleDeleteBtnShow(index, isShow)
	{
		const copy = this.state.deleteBtnsStatus;
		copy[index] = isShow;
		this.setState({
			deleteBtnsStatus: copy
		})
	}

	_handleDeleteMessage(index)
	{
		const cloneArr = this.props.data.messages.slice(0);
		const copy = this.state.deleteBtnsStatus.slice(0);
		cloneArr.splice(index, 1);
		copy.splice(index, 1);
		this.setState({
			messages: cloneArr,
			deleteBtnsStatus: copy
		});
	}
}
