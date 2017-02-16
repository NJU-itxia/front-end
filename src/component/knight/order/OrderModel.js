export default class OrderModel {
  constructor(data) {
    if (data) {
      this._initData(data);
    } else {
      // TODO delete
      this._initData();
    }
  }

  get id() {
    if (this._id) {
      return this._id;
    }
    return null;
  }

  get name() {
    if (this._name) {
      return this._name;
    }
    return null;
  }

  get createdTime() {
    if (this._createTime) {
      return this._createTime;
    }
    return null;
  }

  get bbsId() {
    if (this._bbsId) {
      return this._bbsId;
    }
    return null;
  }

  get machineModel() {
    if (this._machineModel)
    {
      return this._machineModel;
    }
    return null;
  }

  get OS() {
    if (this._OS) {
      return this._OS;
    }
    return null;
  }

  get messages() {
    if (this._messages && this._messages.length > 0) {
      return this._messages;
    }
    return null;
  }

  get type() {
    if (this._type) {
      return this._type;
    }
    return null;
  }

  set type(value) {
    this._type = value;
  }

  addMessage(userName, content, time) {
    const message = {
      userName: userName,
      time: time ? time : new Date().toString(),
      content: content
    };
    // TODO
    // remote push database, push to back-end and receive message, set message
    this._messages.push(message);
  }

  _initData(data) {
    if (data) {
      this._data = data;
    } else {
      this._data = {
        id: 'temp id',
        type: 'waiting',
        name: 'IT侠: demo',
        createdTime:'2016-10-21 18:19:40',
        phoneNumber: 1111111,
        bbsId: '小白和账号',
        machineModel: '联想',
        OS: 'window 10',
        description: '暂无',
        messages: [{
          userName: 'test',
          time:'2016-10-21 18:19:40',
          content: 'just a test message'
        }, {
          userName: 'test',
          time:'2016-10-21 18:19:40',
          content: 'just a test message'
        }]};
    }

    this._serializeData(this._data);
  }

  getJson() {
    if (this._data) {
      return {
        id: this.id,
        type: this.type,
        name: this.name,
  		  createdTime:this.createdTime,
  		  phoneNumber: this.phoneNumber,
  		  bbsId: this.bbsId,
  		  machineModel: this.machineModel,
  	    OS: this.OS,
  		  description: this.description,
  		  messages: this.messages
      };
    }
    return null;
  }

  _serializeData(data) {
    this._id = data.id;
    this._type = data.type;
    this._name = data.name;
    this._createTime = data.createdTime;
    this._phoneNumber = data.phoneNumber;
    this._bbsId = data.bbsId;
    this._machineModel = data.machineModel;
    this._OS = data.OS;
    this._description = data.description;
    this._messages = data.messages;
  }
}
