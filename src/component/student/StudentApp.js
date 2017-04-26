import React from 'react';
import { Col, Menu, Row } from 'antd';
import { Link } from 'react-router';

const MenuItem = Menu.Item;
const MenuItemGroup = Menu.ItemGroup;
const SubMenu = Menu.SubMenu;

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKey: 'newOrder'
    };
  }

  render() {
    return (
      <div>
        <header id="header">
          <Row gutter={0}>
            <Col id="logo" span={6}>
              <Link to="/">
                <img alt="logo" src="/img/logo.jpg" />NJU-IT侠预约系统
              </Link>
            </Col>
            <Col span={6} push={12}>
              <Menu id="menu" mode="horizontal" selectedKeys={[this.state.selectedKey]} >
                <MenuItem key="newOrder">
                  <Link to="/order">当前请求</Link>
                </MenuItem>
                <MenuItem key="myOrders">
                  <Link to="/orders">历史记录</Link>
                </MenuItem>
              </Menu>
            </Col>
          </Row>
        </header>
	      <div className="main-wrapper">
	        {this.props.children}
	      </div>
	      <footer className="page-footer">
	        <div className="container">
	          <hr className="colorgraph" />
	          <p className="text-center">Designed and built by LC &amp; 南京大学 IT 侠工作室</p>
	        </div>
	      </footer>
      </div>
    );
  }
}

export default Student;
