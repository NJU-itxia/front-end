import React from 'react';
import { Well, Glyphicon } from 'react-bootstrap';


export default class Wait extends React.Component {
  render() {
    return (
      <div>
        <h1>人员管理</h1>
        <hr className="colorgraph" />
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

        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th className="col-sm-1">姓名</th>
                <th className="col-sm-1">用户名</th>
                <th className="col-sm-1">校区</th>
                <th className="col-sm-2">角色</th>
                <th className="col-sm-2">邮箱</th>
                <th className="col-sm-2 text-right">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>王少兵</td>
                <td>caigen</td>
                <td>鼓楼校区</td>
                <td>管理员</td>
                <td>
                  <span>478822974@qq.com</span>
                </td>
                <td>
                  <div className="btn-group pull-right">
                    <button className="btn btn-sm btn-default"><Glyphicon glyph="pencil"/> 修改</button>
                    <button className="btn btn-sm btn-warning"><Glyphicon glyph="trash"/> 删除</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>王少兵</td>
                <td>caigen</td>
                <td>鼓楼校区</td>
                <td><button className="btn btn-xs btn-success">提升为管理员</button></td>
                <td>478822974@qq.com</td>
                <td>
                  <div className="btn-group pull-right">
                    <button className="btn btn-sm btn-success"><Glyphicon glyph="save"/> 保存</button>
                    <button className="btn btn-sm btn-danger"><Glyphicon glyph="warning-sign"/> 确定</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    )
  }
}
