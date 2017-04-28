import sha256 from 'sha256';

class KnightModel {
  constructor(props) {
    this.token = this._getToken();
  }

  _getToken() {
    const reg=new RegExp("(^| )"+ this._getTokenPath() +"=([^;]*)(;|$)");
    let arr = undefined;
    if(arr = document.cookie.match(reg)) {
      return unescape(arr[2]);
    }
    return null;
  }

  _getTokenPath() {
    if (this._tokenPath) {
      return this._tokenPath;
    }

    const knightTokenPath = sha256('knightTokenPath');
    return knightTokenPath;
  }

  _setToken(name, value, hours){
    if(Days == null || Days == ''){
        Days = 24;
    }
    var exp  = new Date();
    exp.setTime(exp.getTime() + hours * 60 * 60 * 1000);
    document.cookie = name + "="+ escape (value) + "; path=/;expires=" + exp.toGMTString();
  }

  _clearToken() {
    const exp = new Date();
    exp.setTime(exp.getTime() - 1);
    const cval = this._getToken(this._getTokenPath());
    if(cval !== null)
      document.cookie = name + "=" + cval + "; path=/;expires=" + exp.toGMTString();
  }

  login(username, password) {
    return new Promise((resolve, reject) => {
      if (username && username) {
        $.ajax({
          url: 'http://115.159.189.68:5000/api/v1_1/manager/login',
          method: 'POST',
          data: {
            username: username,
            encryption_str: sha256(password)
          }
        }).then(response => {
          if (response.error) {
            reject(response.error);
          }
        });
      }
      else {
        reject('username and password must not be null!');
      }
    });
  }
}

export default new KnightModel();
