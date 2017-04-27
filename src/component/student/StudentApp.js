import React from 'react';
import { Button, Col, Icon, Menu, Row } from 'antd';
import { Link } from 'react-router';

const MenuItem = Menu.Item;
const MenuItemGroup = Menu.ItemGroup;
const SubMenu = Menu.SubMenu;

class Student extends React.Component {
  render() {
    const selectedKeys = [this.props.routes[2].path];
    return (
      <div>
        <header id="header">
          <Row gutter={0}>
            <Col id="logo" span={6}>
              <Link to="/">
                <img alt="logo" src="/img/logo.jpg" />NJU-IT侠预约系统
              </Link>
            </Col>
            <Col id="options" span={18} >
              <Button id="logout-button" size="small"><Icon type="logout" />登出</Button>
              <Menu id="menu" mode="horizontal" selectedKeys={selectedKeys} >
                <MenuItem key="order">
                  <Link to="/student/order">当前请求</Link>
                </MenuItem>
                <MenuItem key="history">
                  <Link to="/student/history">历史记录</Link>
                </MenuItem>
              </Menu>
            </Col>
          </Row>
        </header>
	      <div className="main-wrapper">
	        {this.props.children}
	      </div>
	      <footer id="footer">
          <Row gutter={0}>
            <Col span={8} className="footer-item">
              <h2><Icon type="link" />相关站点</h2>
              <div>
                <a href="http://itxia.club/" target="_blank">南京大学IT侠公益社团</a>
              </div>
              <div>
                <a href="http://bbs.nju.edu.cn/bbsdoc?board=NoteBook" target="_blank">小百合Notebook版</a>
              </div>
            </Col>
            <Col span={8} className="footer-item">
              <h2><Icon type="github" />Github</h2>
              <div>
                <a href="https://github.com/NJU-itxia" target="_blank">源码仓库</a>
              </div>
            </Col>
            <Col span={8} className="footer-item">
              <h2>Copyright©2017</h2>
              <div>
                <p className="text-center">LC &amp; 南京大学 IT 侠工作室出品</p>
              </div>
            </Col>
          </Row>
	      </footer>
      </div>
    );
  }
}

export default Student;
