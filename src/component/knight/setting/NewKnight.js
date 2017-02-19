/**
 * Created on 16/02/2017.
 */

import React from 'react';

export default class NewKnight extends React.Component {
  constructor(props) {
    super(props);


  }

  handleAdd = () => {
    alert('添加成功');

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
              <form className="form-horizontal" role="form">
                <div className="form-group">
                  <label htmlFor="name" className="col-sm-2 control-label">姓名</label>
                  <div className="col-sm-4">
                    <input type="text" className="form-control" name="name" id="name" placeholder="姓名" required="required"/>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="username" className="col-sm-2 control-label">用户名</label>
                  <div className="col-sm-4">
                    <input type="text" className="form-control" name="username" id="username" placeholder="用户名" required="required"/>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="col-sm-2 control-label">邮箱</label>
                  <div className="col-sm-4">
                    <input type="email" className="form-control" name="email" id="email" placeholder="邮箱" required="required"/>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="col-sm-2 control-label">密码</label>
                  <div className="col-sm-4">
                    <input type="password" className="form-control" name="password" id="password" placeholder="密码" required="required"/>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="campus" className="col-sm-2 control-label">所在校区</label>
                  <div className="col-sm-4">
                    <label className="radio-inline">
                      <input type="radio" defaultChecked name="campus" value="gulou" required="required"/> 鼓楼校区
                    </label>
                    <label className="radio-inline">
                      <input type="radio" name="campus" value="xianlin" required="required"/> 仙林校区
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-info col-sm-2">添加 IT 侠</button>
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
