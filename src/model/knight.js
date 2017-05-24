import cookie from '../util/cookie';

class KnightModel {
  constructor(props) {
    this.token = cookie.get('knight');
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
