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
		listeners.forEach(listener => listener());
	}

	async login(username, password) {
		const promise = $.ajax({
			url: API_URL + '/auth/student',
			method: 'POST',
			data: {
				username,
				password,
			},
		});
		return promise;
	}
}

export default new StudentModel();
