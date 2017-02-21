/**
 * Created on 18/02/2017.
 */

const API_URL = 'http://115.159.189.68:5000/api/v1_1';



class SettingModel {

  constructor() {

  }

  addKnight(knight) {

    knight = {
      "username": "123",
      "password": "12345678",
      "email": "123",
      "campus": "gulou"
    }
    return $.ajax({
      url: 'https://randomuser.me/api/',
      method: 'GET',
      dataType: 'json',
      data: {
        results: 10,
      }
    }).then( response => {
      if (response.error) {
        reject(response.error);
      }
      return response;
    });

    // var p1 = new Promise(function(resolve, reject) {
    //   setTimeout( () => resolve('success'), 1000)
    // });
    // console.log(p1);
    // return p1;
  }

  getKnightInfo() {
    return $.ajax({
      url: 'https://randomuser.me/api/',
      method: 'GET',
      dataType: 'json',
      data: {
        results: 10
      }
    }).then( response => {
      if (response.error) {
        reject(response.error);
      }
      return response;
    });
  }
}


export default new SettingModel();
