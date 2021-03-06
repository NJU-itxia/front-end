/**
 * Created on 18/02/2017.
 */

const LOAD_API = "/setting/response.json";
const ADD_KNIGHT_API = "/setting/submit.json";
const DELETE_KNIGHT_API = '/setting/delete.json';



class SettingModel {
  constructor() {
    this.state = {
      knights: [],
      loading: false,
      tableLoading: false,
    }

    this.listener = [];
  }


  subscribe(callback) {
    this.listener.push(callback);
  }

  inform() {
    this.listener.forEach( cb => cb() );
  }


  //返回所有信息
  getState() {
    return this.state;
  }

  //从服务器加载knight数据
  loadKnightInfo() {
    //TODO :这里有个bug, 莫名其妙刷新全部页面
    // this.state.tableLoading = true;
    // this.inform();
    fetch(LOAD_API)
      .then(res => res.json())
      .then((value) => {
        //更新knights信息，重新渲染页面
        this.state.knights = value.knightList;
        this.state.tableLoading = false;
        this.inform();
      })
      .catch(err => {
        console.error(err);
      })
  }

  //向服务器添加knight数据
  addKnight(knight) {
    //添加IT侠 按钮loading
    this.state.loading = true;
    this.inform();
    fetch(ADD_KNIGHT_API, {
      method: 'POST',
      body: JSON.stringify({ knight }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(value => {
        if(value.ok) {
          //去除loading状态，更新knights信息
          this.state.loading = false;
          this.loadKnightInfo();
        }
      })
      .catch(err => {
        console.error(err);
      })
  }

  deleteKnight(username) {
    fetch(DELETE_KNIGHT_API, {
      method: 'POST',
      body: JSON.stringify({ username }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(value => {
        if(value.ok) {
          this.loadKnightInfo();
        }
      })
      .catch(err => {
        console.error(err);
      })
  }

}

export default new SettingModel();
