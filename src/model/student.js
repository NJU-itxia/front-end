const createHash = require('create-hash');;

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
      contentType: 'application/json',
			data: JSON.stringify({
				phone_number: phone,
				encryption_str: encrpted,
        random_str,
        time_stamp
			}),
		}).then(response => {
			if (response.error) {
				return Promise.reject(response.error);
			}
			this.user = response;
		});
	}
}

export default new StudentModel();
