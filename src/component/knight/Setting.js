import React from 'react';
import NewKnight from './setting/NewKnight';
import Table from './setting/Table';



export default class Wait extends React.Component {
  render() {
    return (
      <div>
        <h1>人员管理</h1>
        <hr className="colorgraph" />
        <NewKnight/>
        <Table/>

      </div>
    )
  }
}
