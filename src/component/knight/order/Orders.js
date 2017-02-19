import React, { Component } from 'react';
import { ListGroup, Badge, Pagination, Glyphicon } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';

import Search from '../Search';
import Order from './Order';
import OrderModel from './OrderModel';

export default class Orders extends Component
{
		constructor(props)
		{
			super(props);
			this.orderTypeArray = ['waiting', 'dealing', 'completed'];
			this.orderLabelMap = {
				waiting: '等待处理',
				dealing: '正在处理',
				completed: '处理完成'
			};
		}

		static PropTypes = {

		}

		static defaultProps = {

		}
		// loadState true is Loading
		state = {
				loadState: true,
				userId: '15950580528',
				orderType: 'waiting',
				orders: {
					waiting: this.getTempData('waiting'),
					dealing: this.getTempData('dealing'),
					completed: this.getTempData('completed')
				},
				filterWord: null,
        activePage: 1,
        pageCount: 4
		}

		componentWillReceiveProps(nextProps) {

		}

		componentDidMount()	{

		}

		render() {
			const filterOrders = this.state.orders[this.state.orderType].filter(this.checkOrderByFilterWord.bind(this));
      const showOrders = filterOrders.filter(this.checkOrderByPagination.bind(this));
			const $showOrders = showOrders.map(this.createOrder.bind(this));

			const $listGroup = this.orderTypeArray.map(item => {
				return (<div key={item} className={ "list-group-item " + item } onClick={ this._getData.bind(this) }>
					<Glyphicon glyph="chevron-right" className={ this.state.orderType === item ? "v-show" : "v-hide"} />
					{ this.orderLabelMap[item] }
					{ this.state.loadState ? <div className=' orderlist-load-icon iconfont icon-loading-points'></div> : <Badge> { this.state.orders[item].length } </Badge> }
				</div>);
			});

			return (<div className="itxia-admin-orders">
			        <header className="admin-order-header">
                <div className='title'>
                  <h1 className="title">{this.orderLabelMap[this.state.orderType]}</h1>
                </div>
                <div className='extra'>
                  <div className='search'>
                    <Search className="search-component" title="记录搜索" placeholder="请输入" handleChange={ this._handleSearchChange.bind(this) }></Search>
                  </div>
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
                  <Pagination
                    prev
                    next
                    boundaryLinks
                    items={Math.ceil(filterOrders.length / 4)}
                    maxButtons={4}
                    activePage={this.state.activePage}
                    onSelect={this._handlePaginationSelectChange}
                  />
								</div>
							</main>
			      </div>);
		}

    createOrder(item, index) {
      return (<Order
        key={ index }
        className="itxia-order"
        data={item.getJson()}
        type={this.state.orderType}
        handleDataChange={this.handleOrderDataChange(this.state.orderType, index)}></Order>);
    }

    checkOrderByFilterWord(data, index) {
      if (this.state.filterWord) {
        // design filter check logic function to judge
        return true;
      }
      // TODO return false
      return true;
    }

    checkOrderByPagination(data, index) {
      const range = {
        min: (this.state.activePage - 1) * this.state.pageCount,
        max: this.state.activePage * this.state.pageCount
      };
      if (index < range.max && index >= range.min) {
        return true;
      }
      return false;
    }

    handleOrderDataChange = (type, index) => {
      return (data) => {
        this.state.orders[type][index] = data;
        this.forceUpdate();
      };
    }

		_getData(event) {
      event.preventDefault();
			$(event.target.parentNode.children).removeClass('selected');
			event.target.classList.add('selected');
			const type = event.target.classList.contains('waiting') ? 'waiting' : (event.target.classList.contains('dealing') ? 'dealing' : 'completed');
			this.setState({
				orderType: type,
        loadState: false,
			});
		}

    getTempData(type) {
      const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18].map(item => {
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
      if (value !== this.state.filterWord) {
        this.setState({
          filterWord: value
        });
      }
		}

    _handlePaginationSelectChange = (eventKey) => {
      this.setState({
        activePage: eventKey
      });
    }
}
