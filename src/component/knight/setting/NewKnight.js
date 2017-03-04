/**
 * Created on 16/02/2017.
 */

import React from 'react';
import settingModel from './settingModel';

export default class NewKnight extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    name: 'test',
    username: 'stormqx',
    email: '451045642@qq.com',
    password: '123456',
    campus: 'gulou',
    role: 'manager',
  }

  addKnight = (e) => {
    e.preventDefault();
    settingModel.addKnight(this.state);
  }

  handleChange(name, e) {
    const { value } = e.target;
    //这里仅限于处理直接赋值这种简单的情况，复杂处理建议使用switch(name)语句
    this.setState({
      [name]: value,
    })
  }


  render() {
    return (
      <div className="itxia-new-knight">
        <div className="panel panel-info" >
          <div className="panel-heading">
            <div className="panel-title" data-toggle="collapse" data-target="#panel-body" aria-expanded="true" aria-controls="panel-body">添加 IT 侠</div>
          </div>
          <div className="collapse in" id="panel-body">
            <div className="panel-body">
              <form className="form-horizontal" role="form" onSubmit={this.addKnight}>
                <div className="form-group">
                  <label htmlFor="name" className="col-sm-2 control-label">姓名</label>
                  <div className="col-sm-4">
                    <input type="text" className="form-control" name="name" id="name" placeholder="姓名" required="required" value={this.state.name}  onChange={this.handleChange.bind(this, 'name')}/>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="username" className="col-sm-2 control-label">用户名</label>
                  <div className="col-sm-4">
                    <input type="text" className="form-control" name="username" id="username" placeholder="用户名" required="required" value={this.state.username} onChange={this.handleChange.bind(this, 'username')}/>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="col-sm-2 control-label">邮箱</label>
                  <div className="col-sm-4">
                    <input type="email" className="form-control" name="email" id="email" placeholder="邮箱" required="required" value={this.state.email} onChange={this.handleChange.bind(this, 'email')}/>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="col-sm-2 control-label">密码</label>
                  <div className="col-sm-4">
                    <input type="password" className="form-control" name="password" id="password" placeholder="密码" required="required" value={this.state.password} onChange={this.handleChange.bind(this, 'password')}/>
                  </div>
                </div>
                <div className="form-group" >
                  <label htmlFor="campus" className="col-sm-2 control-label">所在校区</label>
                  <div className="col-sm-4">
                    <label className="radio-inline">
                      <input
                        type="radio"
                        checked={this.state.campus === 'gulou'}
                        name="campus"
                        value="gulou"
                        required="required"
                        onChange={this.handleChange.bind(this, 'campus')}/> 鼓楼校区
                    </label>
                    <label className="radio-inline">
                      <input
                        type="radio"
                        checked={this.state.campus === 'xianlin'}
                        name="campus"
                        value="xianlin"
                        required="required"
                        onChange={this.handleChange.bind(this, 'campus')}/> 仙林校区
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" disabled={this.props.loading} className="btn btn-info add-knight-button">
                      {this.props.loading ?
                        <div className=' orderlist-load-icon iconfont icon-loading-points'></div>: "添加 IT 侠"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
