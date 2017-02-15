export default class OrderModel {
  constructor(data) {
    if (data) {
      this._initData(data);
    }
    // TODO delete
    this._initData();
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

  AddMessage(userName, content, time) {
    const message = {
      userName: userName,
      time: time ? time : new Date().toString(),
      content: content
    };
    this._messages.push(message);
  }

  _initData(data) {
    this._data = {
      name: "IT侠: demo",
		  createdTime:"2016-10-21 18:19:40",
		  phoneNumber: 1111111,
		  bbsId: "小白和账号",
		  machineModel: "联想",
	    OS: "window 10",
		  description: "暂无",
		  messages: [{
  			userName: "test",
  			time:"2016-10-21 18:19:40",
  			content: "just a test message"
		  }, {
  			userName: "test",
  			time:"2016-10-21 18:19:40",
  			content: "just a test message"
		  }]};

    this._name = 'it demo name';
    this._createTime = '2016-10-21 18:19:40';
    this._phoneNumber = '15950580528';
    this._bbsId = '小白和账号';
    this._machineModel = '机器型号';
    this._OS = 'operation system version';
    this._description = '暂无';
    this._messages = [{
      userName: "test",
      time:"2016-10-21 18:19:40",
      content: "just a test message"
    }, {
      userName: "test",
      time:"2016-10-21 18:19:40",
      content: "just a test message"
    }];
  }

  getJson() {
    if (this._data) {
      return {
        name: "IT侠: demo",
  		  createdTime:"2016-10-21 18:19:40",
  		  phoneNumber: 1111111,
  		  bbsId: "小白和账号",
  		  machineModel: "联想",
  	    OS: "window 10",
  		  description: "暂无",
  		  messages: [{
    			userName: "test",
    			time:"2016-10-21 18:19:40",
    			content: "just a test message"
  		  }, {
    			userName: "test",
    			time:"2016-10-21 18:19:40",
    			content: "just a test message"
  		  }]};
    }
    return null;
  }
}
