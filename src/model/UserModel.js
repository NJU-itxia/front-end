import Store from './Store';

export default class UserModel {
	constructor() {
		this.listeners = [];
		this.store = new Store('student');
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

	}
}