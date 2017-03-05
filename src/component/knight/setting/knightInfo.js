/**
 * Created on 16/02/2017.
 */

import React from 'react';
import settingModel from './settingModel';
import Table from './Table';

export default class KnightInfo extends React.Component {
  constructor(props) {
    super(props);
    this.onDeleteKnight = this.onDeleteKnight.bind(this);
  }

  static propTypes = {
    knightInfo: React.PropTypes.array,
    tableLoading: React.PropTypes.bool,
  };

  componentDidMount() {
    settingModel.loadKnightInfo();
  }

  onDeleteKnight(username) {
    settingModel.deleteKnight(username);
  }

  onEditKnight(username) {
    //TODO
  }

  render() {
    if(!this.props.knightInfo[0]) {
      return null;
    }

    const columns = Object.keys(this.props.knightInfo[0]).map(val => {
      return {title: val, key: val}
    });

    return (
      <div>
        <Table columns={columns} dataSource={this.props.knightInfo} tableLoading={this.props.tableLoading} onDeleteKnight={this.onDeleteKnight}/>
      </div>
    );
  }
}
