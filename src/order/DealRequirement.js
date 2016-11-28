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
				waitingOrders: [],
				dealingOrders: [],
				completedOrders: [],
				searchContent: []
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
			const $waitingOrders = this.state.waitingOrders.map((item, index) => {
				return (<Order key={ index }></Order>);
			});

			return (<div className="itxia-deal-requirement">
			        <header className=" requirement-header">
			          <h1>等待处理</h1>
			          <hr className="colorgraph" />
			        </header>
							<main className="main">
								<div className="slide">
									<ListGroup>
			                <div className="list-group-item" activeClassName="list-group-item-warning" onClick={ this._getData.bind(this) }>
			                  等待处理 { this.state.loadState ? <div className=' orderlist-load-icon iconfont icon-loading-points'></div> : <Badge> { this.state.waitingOrders.length } </Badge> }
			                </div>
			                <div className="list-group-item" activeClassName="list-group-item-info" onClick={ this._getData.bind(this) }>
			                  正在处理 { this.state.loadState ? <div className=' orderlist-load-icon iconfont icon-loading-points'></div> : <Badge> { this.state.waitingOrders.length } </Badge> }
			                </div>
			                <div className="list-group-item" activeClassName="list-group-item-success" onClick={ this._getData.bind(this) }>
			                  处理完成 { this.state.loadState ? <div className=' orderlist-load-icon iconfont icon-loading-points'></div> : <Badge> { this.state.waitingOrders.length } </Badge> }
			                </div>
			            </ListGroup>
								</div>
								<div className="content">
									<Search title="记录搜索" handleChange={ this._handleSearchChange.bind(this) }></Search>
									{ $waitingOrders }

								</div>

							</main>
			        {/* <Row className="orderlist-nav" onScroll={ this._handleScroll.bind(this) }>
			          <Col ref="nav-float" xs={12} sm={3} >

			          </Col>
			          <Col xs={24} sm={6}>
			           <p>正在载入……</p>
			          </Col>
			        </Row> */}
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
			this.setState({
				loadState: true
			});
			setTimeout(() => {
				this.setState({
					waitingOrders: [1, 2, 3, 4],
					dealingOrders: [1, 2, 3, 4],
					completedOrders: [1, 2, 3, 4],
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
