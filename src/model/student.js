const API_URL = 'http://localhost:3009/api';

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

	async login(username, password) {
		return $.ajax({
			url: API_URL + '/auth/student',
			method: 'POST',
			data: {
				username,
				password,
			},
		}).then(response => {
			if (response.error) {
				return Promise.reject(response.error);
			}
			this.user = response;
			console.log(this.user);
		});
	}
}

export default new StudentModel();
