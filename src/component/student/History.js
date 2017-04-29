import React from 'react';
import { Card, Col, Row } from 'antd';
import studentModel from '../../model/student';

export default class MyOrder extends React.Component {
  componentDidMount() {
    studentModel.loadOrders();
  }

  render() {
    return (
      <Row>
        <Col span={24}>
          <Card className="order">Card 1</Card>
        </Col>
      </Row>
    )
  }
}
