import React, { Component } from "react";
import { Row, Col, ListGroup, ListGroupItem, Badge, Panel,
  ButtonToolbar, Button, Collapse, Input } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";
import { Link } from "react-router";
import moment from 'moment';

import Search from "../Search";
import Order from "./Order";
import OrderModel from './OrderModel';

export default class Orders extends Component
{
		constructor(props)
		{
			super(props);
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
					waiting: this.getTempData('waiting'),
					dealing: this.getTempData('dealing'),
					completed: this.getTempData('completed')
				},
				searchContent: ""
		}

		componentWillReceiveProps(nextProps) {

		}

		componentDidMount()	{

		}

		render() {
			const showOrders = this.state.orders[this.state.orderType];
			const $showOrders = showOrders.map((item, index) => {
				return (<Order key={ index } className="itxia-order" data={item} type={this.state.orderType}></Order>);
			});

			const $listGroup = this.orderTypeArray.map(item => {
				return (<div key={item} className={ "list-group-item " + item } onClick={ this._getData.bind(this) }>
					{ this.orderLabelMap[item] } { this.state.loadState ? <div className=' orderlist-load-icon iconfont icon-loading-points'></div> : <Badge> { this.state.orders[item].length } </Badge> }
				</div>);
			});

			return (<div className="itxia-admin-orders">
			        <header className="admin-order-header">
                <div className='title'>
                  <h1 className="title">{this.orderLabelMap[this.state.orderType]}</h1>
                </div>
                <div className='search'>
                  <Search className="search-component" title="记录搜索" placeholder="请输入" handleChange={ this._handleSearchChange.bind(this) }></Search>
                </div>
                <hr className="colorgraph" />
			        </header>
							<main className="main">
								<div className="slide">
									<ListGroup ref="list-group">
			                { $listGroup }
			            </ListGroup>
								</div>
								<div className="content">
									{ $showOrders }
								</div>
							</main>
			      </div>);
		}

		_getData(event) {
			event.persist();
			$(event.target.parentNode.children).removeClass("selected");
			event.target.classList.add("selected");
			const type = event.target.classList.contains("waiting") ? "waiting" : (event.target.classList.contains("dealing") ? "dealing" : "completed");
			this.setState({
				orderType: type
			});
		}

    getTempData(type) {
      const result = [1, 2, 3, 4, 5, 6].map(item => {
        const data = new OrderModel();
        data.type = type;
        return data;
      });
      return result;
    }

		_handleScroll(event) {
			console.log(event);
		}

		_handleSearchChange(value) {
			alert("get input value" + value);
		}
}
