import React from 'react';
import { Row, Col, ListGroup, ListGroupItem, Badge, Panel,
  ButtonToolbar, Button, Collapse, Input } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";
import { Link } from "react-router";
import moment from 'moment';


class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <Panel header={<h3>{this.props.order.name}</h3>} bsStyle="warning">
        <p><strong>提交时间: </strong>{moment(this.props.order._created).utcOffset(8).format('YYYY-MM-DD HH:mm:ss')}</p>
        <p><strong>手机号码: </strong><a href={"tel:" + this.props.order.phone_number}>{this.props.order.phone_number}</a></p>
        <p><strong>百合帐号: </strong>{this.props.order.lilybbs_id}</p>
        <p><strong>电脑型号: </strong>{this.props.order.machine_model}</p>
        <p><strong>操作系统: </strong>{this.props.order.OS}</p>
        <p><strong>问题描述: </strong>{this.props.order.description}</p>
        <p><strong>时间: </strong>{moment().utcOffset(0).format('ddd, DD MMM YYYY HH:mm:ss [GMT]')}</p>
        <p><strong>时间: </strong>{moment().utcOffset(0).utcOffset(8).format('YYYY-MM-DD HH:mm:ss')}</p>
        <ButtonToolbar>
          <Button bsStyle="info">我来处理</Button>
          <Button disabled onClick={ ()=> this.setState({ open: !this.state.open })}>展开回复信息 (0)</Button>
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
Order.propTypes = {
  order: React.PropTypes.object
};
Order.defaultProps = {
  order: {}
};



class OrderList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var orderlist = this.props.orders.map(function(order) {
      return (
        <Order key={order['_id']} order={order} />
      )
    });
    return (
      <div>{orderlist}</div>
    );
  }
}
OrderList.propTypes = {
  orders: React.PropTypes.array
};
OrderList.defaultProps = {
  orders: []
};




export default class Wait extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'total': 'loading',
      'orders': []
    };
  }

  get_orders() {
    $.ajax({
      url: 'http://localhost:5000/orders',
      type: 'GET',
      dataType: 'json',

      success: function(data) {
        var orders = data._items;
        var total = data._meta.total;
        this.setState({orders: orders});
        this.setState({total: total});
      }.bind(this),

      error: function(data) {
        console.log(data);
      }.bind(this),
    });
  }

  componentDidMount() {
    this.get_orders();
  }

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
                <Link to="/knight/wait" className="list-group-item" activeClassName="list-group-item-warning">
                  等待处理<Badge>{this.state.total}</Badge>
                </Link>
                <Link to="/knight/work" className="list-group-item" activeClassName="list-group-item-info">
                  正在处理<Badge>3</Badge>
                </Link>
                <Link to="/knight/finish" className="list-group-item" activeClassName="list-group-item-success">
                  处理完成<Badge>1302</Badge>
                </Link>
            </ListGroup>
          </Col>
          <Col xs={12} sm={6}>
            { this.state.total === 'loading' ? <p>正在载入……</p> : <OrderList orders={this.state.orders} />}
          </Col>
        </Row>
      </div>
    );
  }
}
