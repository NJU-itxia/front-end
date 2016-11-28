import React, { Component } from "react";
import { Row, Col, ListGroup, ListGroupItem, Badge, Panel,
  ButtonToolbar, Button, Collapse, Input } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";
import { Link } from "react-router";
import moment from 'moment';

import Search from "../component/Search";
import Order from "../component/Order";

export default class DealRequirement extends Component
{
		constructor(props)
		{
			super(props);
			this.styleMap = {
				"waiting": "warning",
				"dealing": "info",
				"completed": "primary"
			};
			this.orderTypeArray = ["waiting", "dealing", "completed"];
			this.orderLabelMap = {
				"waiting": "等待处理",
				"dealing": "正在处理",
				"completed": "处理完成"
			};
		}

		static PropTypes = {

		}

		static defaultProps = {

		}
		// loadState true is Loading
		state = {
				loadState: true,
				userId: "15950580528",
				orderType: "waiting",
				orders: {
					waiting: [],
					dealing: [],
					completed: []
				},
				searchContent: ""
		}

		componentWillReceiveProps(nextProps)
		{

		}

		componentDidMount()
		{
			// $(window).scroll((event) => {
			// 	const height = $(window).scrollTop();
			// 	if (height < 133)
			// 	{
			// 		return;
			// 	}
			//
			// 	const diff = height - 133;
			//
			// 	console.log(this.refs["nav-float"].marginTop);
			// 	this.refs["nav-float"].style.marginTop = diff + "px";
			//
			// });
			// $(window).scroll(() => {
			// 			if ($nav.scrollTop)
			// });
		}

		render() {
			const showOrders = this.state.orders[this.state.orderType];

			const $waitingOrders = showOrders.map((item, index) => {
				return (<Order key={ index } style={ this.styleMap[this.state.orderType] } className="itxia-order"></Order>);
			});

			const $listGroup = 	this.orderTypeArray.map(item => {
				return (<div key={item} className={ "list-group-item " + item } onClick={ this._getData.bind(this) }>
					{ this.orderLabelMap[item] } { this.state.loadState ? <div className=' orderlist-load-icon iconfont icon-loading-points'></div> : <Badge> { this.state.orders[item].length } </Badge> }
				</div>);
			});

			return (<div className="itxia-deal-requirement">
			        <header className=" requirement-header">
			          <h1>等待处理</h1>
			          <hr className="colorgraph" />
			        </header>
							<main className="main">
								<div className="slide">
									<ListGroup ref="list-group">
			                { $listGroup }
			            </ListGroup>
								</div>
								<div className="content">
									<Search title="记录搜索" placeholder="请输入" handleChange={ this._handleSearchChange.bind(this) }></Search>
									{ $waitingOrders }
								</div>
							</main>
			      </div>);
		}

		_getData(event)
		{
			// console.log("click");
			// $.ajax({
			// 	url: 'http://api.pkuphy.me/orders',
			// 	type: 'GET',
			// 	dataType: 'json',
			//
			// 	success: function(data) {
			// 		// var orders = data._items;
			// 		// var total = data._meta.total;
			// 		// this.setState({orders: orders});
			// 		// this.setState({total: total});
			// 		console.log("获得数据");
			// 	}.bind(this),
			//
			// 	error: function(data) {
			// 		console.log(data);
			// 	}.bind(this),
			// });

			// test data
			event.persist();
			$(event.target.parentNode.children).removeClass("selected");
			event.target.classList.add("selected");
			const type = event.target.classList.contains("waiting") ? "waiting" : (event.target.classList.contains("dealing") ? "dealing" : "completed");
			this.setState({
				loadState: true,

			});
			setTimeout(() => {
				this.setState({
					orderType: type,
					orders: {
						waiting: [1, 2, 3, 4],
						dealing: [1, 2, 3, 4],
						completed: [1, 2, 4]
					},
					loadState: false
				});
			}, 1000);

		}


		_handleScroll(event)
		{
			console.log(event);
		}

		_handleSearchChange(value)
		{
			alert("get input value" + value);
		}
}
