/**
 * Created on 05/03/2017.
 */

import React from 'react';
import { Glyphicon } from 'react-bootstrap';

export default class Table extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  static propTypes = {
    dataSource: React.PropTypes.array,
    columns: React.PropTypes.array,
  };

  static defaultProps = {
    tableLoading: false,
    columns: [],
  };

  _renderComlumns(columns) {
    columns = JSON.parse(JSON.stringify(columns));
    columns.push({title: '操作', key: 'operation'});
    //这里假设table的列数不超过12.
    const width = Math.floor(12/columns.length);
    const header = columns.map(entry =>
      <th key={entry.key} className={`col-sm-${width}`}>
        {entry.title}
      </th>
    );
    return (
      <thead>
        <tr>
          {header}
        </tr>
      </thead>
    )
  }

  _getButtonGroup(handleDelete) {
    return (
      <td key="buttonGroup">
        <div className="btn-group">
          <button className="btn btn-sm btn-success"><Glyphicon glyph="save"/> 保存</button>
          <button className="btn btn-sm" onClick={handleDelete} style={{background: 'white', border: 'solid 1.5px #DDDDDD'}}><Glyphicon glyph="remove-sign"/> 删除</button>
        </div>
      </td>
    )
  }

  _renderData(columns, dataSource) {
    //需要获取columns的key,将dataSource中的数据项与columns一一对应
    const keys = columns.map(entry => entry.key);

    const body = dataSource.map(data => {
      let tr = [];
      for(let key of keys) {
        tr.push(<td key={key}>{data[key]}</td>);
      }

      //增加操作button
      tr.push(this._getButtonGroup(
        this.handleDelete.bind(this, data.username)
      ));
      return <tr key={data.username}>{tr}</tr>;
    });

    return (
      <tbody>
      {body}
      </tbody>
    );
  }

  handleDelete(username, e) {
    //TODO
    e.preventDefault();
    this.props.onDeleteKnight(username);
  }

  render() {
    const header = this._renderComlumns(this.props.columns);
    const tableBody = this._renderData(this.props.columns, this.props.dataSource);
    return (
      this.props.tableLoading ? <span>tableLoading...</span> :
      <div className="itxia-knight-info">
        <div className="table-responsive">
          <table className="table table-hover">
            {header}
            {tableBody}
          </table>
        </div>
      </div>
    );
  }
}


