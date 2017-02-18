import React from 'react';
import Order from './order/Order';
import OrderModel from './order/OrderModel';

export default class Wait extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    loadState: true,
    orderType: "recentlyReplied",
    userId: '15950580528',
    orders: this.getTempData('recentlyReplied')
  }

  componentDidMount() {

  }

  createOrder(item, index) {
    return (<Order
      key={index}
      className="itxia-order"
      orderType="recentlyReplied"
      data={item.getJson()}
      type={this.state.orderType}
      handleDataChange={this.handleOrderDataChange(index).bind(this)}></Order>);
  }


  render() {

    const $orders = this.state.orders.map(this.createOrder.bind(this)).sort();


    return (
      <div>
        <h1>最近十个有新回复的请求</h1>
        <hr className="colorgraph" />
        {$orders}
      </div>
    )
  }

  getTempData(type) {
    const result = [1, 2, 3, 4, 5, 6].map(item => {
      const data = new OrderModel();
      data.type = type;
      return data;
    });
    return result;
  }

  handleOrderDataChange = (index) => {
    return (data) => {
      this.state.orders[index] = data;
      this.forceUpdate();
    };
  }

}
