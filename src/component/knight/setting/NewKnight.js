/**
 * Created on 16/02/2017.
 */

import React from 'react';
import SettingModel from './SettingModel';

export default class NewKnight extends React.Component {
  constructor(props) {
    super(props);

  }

  state = {
    name: 'qixin',
    username: 'stormqx',
    email: '451045642@qq.com',
    password: '123456',
    campus: 'gulou',
    role: 'manager',
    loading: false
  }

  addKnight = (e) => {
    e.preventDefault();
    const knight = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      campus: this.state.campus,
      role: this.state.manager
    };
    this.setState({loading: true});
    //TODO
    //send knight info to back-end, update knight table

    SettingModel.addKnight(knight)
      .then(
        (response) => {
          console.log(response);

          this.setState({
            loading: false,
            name: '',
            username: '',
            email: '',
            password: '',
            campus: 'gulou'
          });
        }
      );
  }

  handleNameChange = (e) => {
    this.setState({name: e.target.value});
  }

  handleUsernameChange = (e) => {
    this.setState({username: e.target.value});
  }

  handleEmailChange = (e) => {
    this.setState({email: e.target.value});
  }

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value});
  }

  handleCampusChange = (e) => {
    this.setState({campus: e.target.value});
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
                    <input type="text" className="form-control" name="name" id="name" placeholder="姓名" required="required" value={this.state.name}  onChange={this.handleNameChange}/>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="username" className="col-sm-2 control-label">用户名</label>
                  <div className="col-sm-4">
                    <input type="text" className="form-control" name="username" id="username" placeholder="用户名" required="required" value={this.state.username} onChange={this.handleUsernameChange}/>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="col-sm-2 control-label">邮箱</label>
                  <div className="col-sm-4">
                    <input type="email" className="form-control" name="email" id="email" placeholder="邮箱" required="required" value={this.state.email} onChange={this.handleEmailChange}/>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="col-sm-2 control-label">密码</label>
                  <div className="col-sm-4">
                    <input type="password" className="form-control" name="password" id="password" placeholder="密码" required="required" value={this.state.password} onChange={this.handlePasswordChange}/>
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
                        onChange={this.handleCampusChange}/> 鼓楼校区
                    </label>
                    <label className="radio-inline">
                      <input
                        type="radio"
                        checked={this.state.campus === 'xianlin'}
                        name="campus"
                        value="xianlin"
                        required="required"
                        onChange={this.handleCampusChange}/> 仙林校区
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" disabled={this.state.loading} className="btn btn-info add-knight-button">
                      {this.state.loading ?
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
