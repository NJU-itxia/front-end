import React from 'react';
import NewKnight from './setting/NewKnight';
import Table from './setting/Table';



export default class Setting extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    knightInfo: []
  }



  render() {
    return (
      <div className="itxia-setting">
        <h1>人员管理</h1>
        <hr className="colorgraph" />
        <NewKnight/>
        <Table/>
      </div>
    )
  }
}
