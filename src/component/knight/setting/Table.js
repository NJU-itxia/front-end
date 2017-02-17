/**
 * Created on 16/02/2017.
 */

import React from 'react';
import { Glyphicon } from 'react-bootstrap';

export default class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data : []
    }
  }


  render() {
    return (
      <div className="itxia-knight-info">
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
    );
  }
}
