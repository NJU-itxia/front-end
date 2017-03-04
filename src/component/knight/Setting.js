import React from 'react';
import NewKnight from './setting/NewKnight';
import KnightInfo from './setting/knightInfo';
import settingModel from './setting/settingModel';



export default class Setting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      knights: [],
      loading: null,
    }

    this._onChange = this._onChange.bind(this);
  }

  _onChange() {
    const {knights, loading} = settingModel.getState();
    console.log(knights, loading);
    this.setState({
      knights,
      loading
    })
  }

  componentDidMount() {
    settingModel.subscribe(this._onChange);
  }


  render() {
    return (
      <div className="itxia-setting" >
        <h1>人员管理</h1>
        <hr className="colorgraph" />
        <NewKnight/>
        <KnightInfo knightInfo = {this.state.knights}/>
      </div>
    )
  }
}
