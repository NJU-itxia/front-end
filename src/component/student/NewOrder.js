import { Button, Card, Col, Row, Form, Icon, Input, Select } from 'antd';
import React from 'react';
const FormItem = Form.Item;

export default class NewOrder extends React.Component {
  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 18 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 18 },
        sm: { span: 14 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 18,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };
    return (
      <Row>
        <Col span="24">
          <div className="title">
            <h1>你好，请提交你的维修预约</h1>
          </div>
          <Form>
            <FormItem
              {...formItemLayout}
              label="手机"
              hasFeedback
            >
              <Input disabled={true} value={15822228888} />
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="姓名"
            >
              <Input />
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="邮箱"
            >
              <Input />
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="校区"
            >
              <Select
                style={{ width: '32%' }}
                defaultValue="gulou"
              >
                <Option value="gulou">鼓楼校区</Option>
                <Option value="xianlin">仙林校区</Option>
              </Select>
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="电脑型号"
              help="电脑型号可以查看发票、说明书标识，在电脑背面或电池下面也有电脑型号标签"
            >
              <Input />
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="操作系统"
              help="如:win-xp,win7-32位/64位,win8-32位/64位,mac,ubuntu-32位/64位"
            >
              <Input />
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="问题描述"
              help={
                <ul>
                  <li>故障现象(例如系统无法启动、运行时风扇狂转)</li>
                  <li>故障持续时间</li>
                  <li>问题出现的前后，你有哪些操作</li>
                  <li>需要软件还是硬件帮助</li>
                </ul>
              }
            >
              <Input type="textarea" rows={4} />
            </FormItem>
            <FormItem {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit" size="large">提交</Button>
            </FormItem>
          </Form>
        </Col>
      </Row>
    );
  }
}
