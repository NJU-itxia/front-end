export default class Message {
    constructor(data) {
        this.content = data.content;
        this.userName = data.userName;
        this.time = data.time;
        this.orderId = data.orderId;
        this.name = data.name;
    }

    get name(){
        return this.name;
    }

    set name(name){
        this.name = name;
    }

    get content() {
        return this.content;
    }
    set content(content) {
        this.content = content;
    }

    get userName() {
        return this.userName;
    }
    set userName(author) {
        this.userName = userName;
    }

    get time() {
        return this.time;
    }
    set time(time) {
        this.time = time;
    }

    get orderId() {
        return this.orderId;
    }
    set orderId(orderId) {
        this.orderId = orderId;
    }

    isValid(object) {
        flag = true;
        Object.keys(object).forEach(key => {
            if (!object[key]) {
                flag = false;
            }
        });
        return flag;
    }

    getJson() {
        if (isValid(this)) {
            return {
                content: this.content,
                userName: this.userName,
                time: this.time,
                orderId: this.orderID,
                name: this.name
            }
        }
        else{
            return null;
        }
    }

    static testData(number){
        let data = [];
        for(let i=0;i<number;i++){
            const random = Math.random();
            data.push({
                content: random,
                userName: random,
                time: random,
                orderId: random,
                name: random
            });
        }
        return data;
    }

    


}