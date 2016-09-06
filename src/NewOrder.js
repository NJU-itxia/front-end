import React from 'react';
import { Row, Col, ButtonInput, FormControls, Image, Navbar, Nav, NavItem, Glyphicon, Input } from "react-bootstrap";
import cookie from 'react-cookie';


export default class NewOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone_number : "",
      name         : "",
      lilybbs_id   : "",
      campus       : "gulou",
      machine_model: "",
      OS           : "",
      description  : "",
    };
  }

  componentDidMount() {
    this.setState({phone_number: cookie.load('userPhoneNumber').toString()});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.phone_number.length  == 0 ||
        this.state.name.length          == 0 ||
        this.state.campus.length        == 0 ||
        this.state.machine_model.length == 0 ||
        this.state.OS.length            == 0 ||
        this.state.description.length   == 0
    ) {
      console.error('除小百合 ID 之外，其他均为必填选项，请您把信息填写完整之后再提交。');
      alert('除小百合 ID 之外，其他均为必填选项，请您把信息填写完整之后再提交。');
      return;
    }
    Object.keys(this.state).map(k => this.state[k] = this.state[k].trim()); // 将字段前后的空白字符删除
    $.ajax({
      url        : 'http://localhost:5000/orders',
      type       : 'POST',
      dataType   : 'json',
      contentType: "application/json",
      data       : JSON.stringify(this.state),

      success: function(data) {
        $('#post_ret').show().text(JSON.stringify(data, null, '  '));
        this.getOrder(data['_id']);
      }.bind(this),

      error: function(data) {
        $('#post_ret').show().text(JSON.stringify(data, null, '  '));
      }.bind(this),
    });
  }

  getOrder(oid) {
    $.ajax({
      url     : 'http://localhost:5000/orders/' + oid,
      type    : 'GET',
      dataType: 'json',

      success: function(data) {
        $('#get_ret').show().text(JSON.stringify(data, null, '  '));
      }.bind(this),
    });
  }

  render() {
    return (
      <div>
        <h1>您好，请填写预约信息</h1>
        <hr className="colorgraph" />
        <h4 className="text-info">请定期登录查看 IT 侠是否回复，我们会尽快回应您的预约，另外 IT 侠也可能通过预留手机号码与您联系。不是所有的预约都能被解决。</h4>
        <h3><strong>服务条款：</strong></h3>
        <ol>
          <li>我们是纯公益组织，不收取任何费用，属纯公益性质；</li>
          <li>服务对象仅限南大在校师生，以及为 IT 侠提供过捐助的爱心人士；</li>
          <li>IT 侠的服务由 NoteBook 版负责监管，不与任何商业团体挂钩；</li>
          <li>我们视您的个人资料为绝密信息，保证隐私不外泄；</li>
          <li>依业界惯例，IT 侠不对以下情形负责：
            <ul>
              <li>意外数据丢失；</li>
              <li>由于机器老化和用料低端，在拆装过程中可能发生的卡扣折断、螺母碎裂等情形；</li>
              <li>对处于不稳定边缘的、有潜在故障风险的机器（如显卡门机器），拆装之后发生无法开机的情形；</li>
              <li>以及其它非我们的操作过失造成的意外。</li>
            </ul>
          </li>
          <li>对于用户没有购买的软件，IT 侠顶多帮助安装试用版；</li>
          <li>本活动的最终解释权归 <a href="http://bbs.nju.edu.cn/">小百合 NoteBook 版</a> 所有。</li>
        </ol>
        <hr className="colorgraph" />
        <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
          <FormControls.Static
            type="text"
            label="手机号码："
            labelClassName="col-sm-2"
            wrapperClassName="col-sm-8"
            help={<p><Glyphicon glyph="info-sign"/> 如需更换手机号码，请退出当前帐号并以新的手机号码登录。</p>}>
            <strong>{this.state.phone_number}</strong>
          </FormControls.Static>
          <Input
            type="text"
            label="姓名："
            labelClassName="col-sm-2"
            wrapperClassName="col-sm-2"
            value={this.state.name}
            onChange={(e) => this.setState({name: e.target.value})} />
          <Input
            type="text"
            label="小百合 ID："
            labelClassName="col-sm-2"
            wrapperClassName="col-sm-5"
            value={this.state.lilybbs_id}
            onChange={(e) => this.setState({lilybbs_id: e.target.value})}
            help={<p><Glyphicon glyph="question-sign"/> 若没有小百合帐号可不填，此项仅用于区分是否为本校师生。</p>} />
          <div className="form-group">
            <label htmlFor="campus" className="col-sm-2 control-label">预约校区：</label>
            <div className="col-sm-8">
              <label className="radio-inline col-sm-2">
                <input
                  type="radio"
                  name="campus"
                  defaultChecked
                  value="gulou"
                  onChange={(e) => this.setState({campus: e.target.value})} />
                  鼓楼校区
              </label>
              <label className="radio-inline col-sm-2">
                <input
                  type="radio"
                  name="campus"
                  value="xianlin"
                  onChange={(e) => this.setState({campus: e.target.value})} />
                  仙林校区
              </label>
            </div>
          </div>
          <Input
            type="text"
            label="电脑型号："
            labelClassName="col-sm-2"
            wrapperClassName="col-sm-8"
            value={this.state.machine_model}
            onChange={(e) => this.setState({machine_model: e.target.value})}
            help={<p><Glyphicon glyph="question-sign"/> 电脑型号可以查看发票、说明书标识，在电脑背面或电池下面也有电脑型号标签。</p>} />
          <Input
            type="text"
            label="操作系统："
            labelClassName="col-sm-2"
            wrapperClassName="col-sm-8"
            value={this.state.OS}
            onChange={(e) => this.setState({OS: e.target.value})}
            help={<p><Glyphicon glyph="question-sign"/> 如：Win-XP, Win7-32位/64位, Win8-32位/64位, Win10-32位/64位, OS X, Ubuntu-32位/64位。</p>} />
          <Input
            type="textarea"
            rows={4}
            label="问题描述："
            labelClassName="col-sm-2"
            wrapperClassName="col-sm-8"
            value={this.state.description}
            onChange={(e) => this.setState({description: e.target.value})}
            help={<p><Glyphicon glyph="question-sign"/> 请尽可能全面地描述目前电脑出现的问题，以及电脑出现问题的前后，自己有哪些异常操作，这样我们可以快速定位故障的原因，最好能说明需要的帮助是软件上的还是硬件上的。描述故障时，请尽量描述清楚下列事项：故障的现象（例如系统无法启动、运行时风扇狂转），故障持续时间等。</p>} />
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-8">
              <button className="btn btn-primary" type="submit">提交</button>
              <p className="help-block">
                <Glyphicon glyph="info-sign"/> 请您仔细阅读本页面上方的服务条款，点击提交按钮即视为您已同意此条款。<br/>
              </p>
            </div>
          </div>
        </form>
        <pre id="post_ret" style={{display: 'none'}}></pre>
        <pre id="get_ret" style={{display: 'none'}}></pre>
      </div>
    )
  }
}
