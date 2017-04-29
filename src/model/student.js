import createHash from 'create-hash';
import cookie from '../util/cookie';

const API_URL = 'http://localhost:5000/api/v1_1';

class StudentModel {
  constructor() {
    this.listeners = [];
  }

  subscribe(listener) {
    this.listeners.push(listener);
    let isSubscribed = true;

    const unsubscribe = () => {
      if (!isSubscribed) {
        return;
      }
      isSubscribed = false;
      this.listeners.splice(this.listeners.indexOf(listener), 1);
    }
    return unsubscribe;
  }

  notifyAll() {
    this.listeners.forEach(listener => listener());
  }

  // TODO move to ServiceClient
  login(phone, password) {
    const random_str = 'pong!you';
    const time_stamp = new Date() + '';
    const encrpted = createHash('sha256')
      .update(password, 'utf8')
      .update(random_str, 'utf8')
      .update(time_stamp, 'utf8')
      .digest('hex');
    return $.ajax({
      url: API_URL + '/client/login',
      method: 'POST',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({
        phone_number: phone,
        encryption_str: encrpted,
        random_str,
        time_stamp
      })
    }).then(response => {
      this.user = response;
      this.token = response.token;
      return response
    });
  }

  logout() {
    cookie.clear('client');
  }

  loadOrders() {
    $.ajax({
      url: API_URL + '/client/forms',
      method: 'GET',
      contentType: 'application/json; charset=utf-8',
      headers: {
        'token': this.token
      }
    }).then(response => {
      console.log(response);
    });
  }

  set token(token) {
    cookie.set('client', token, 24 * 7);
  }

  get token() {
    return cookie.get('client');
  }
}

export default new StudentModel();
