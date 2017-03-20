export default class Message {
    constructor(data) {
        this.content = data.content;
        this.userName = data.userName;
        this.replyTime = data.replyTime;
        this.orderId = data.orderId;
        this.orderName = data.orderName;
    }

    get orderName(){
        return this.orderName;
    }

    set orderName(name){
        this.name = orderName;
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

    get replyTime() {
        return this.replyTime;
    }
    set replyTime(replyTime) {
        this.replyTime = replyTime;
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
                replyTime: this.replyTime,
                orderId: this.orderID,
                orderName: this.orderName
            }
        }
        else{
            return null;
        }
    }

    static testData(number){
        let data = [];
        for(let i=0;i<number;i++){
            const random = Math.random().toString();
            data.push({
                content: random,
                userName: random,
                replyTime: random,
                orderId: random,
                orderName: random
            });
        }
        return data;
    }

    


}