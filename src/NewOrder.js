import React from 'react';
import { Row, Col, ButtonInput, FormControls, Image, Navbar, Nav, NavItem, Glyphicon, Input } from "react-bootstrap";


export default class NewOrder extends React.Component {
  render() {
    return (
      <div>
        <h1>你好，请提交你的请求</h1>
        <hr className="colorgraph" />
        <p>请定期登录看看 IT 侠是否回复，如果方便处理我们会尽快与你联系，另外 IT 侠也可能通过预留手机与你联系，不是所有的预约都能被解决。</p>
        <ol>
          <li>我们是纯公益组织不收取任何费用、纯公益性质；</li>
          <li>服务对象仅限南大在校师生，以及为 IT 侠提供过捐助的爱心人士；</li>
          <li>IT 侠的服务由 NoteBook 版负责监管，不与任何商业团体挂钩；</li>
          <li>视您的个人资料为绝密信息，保护隐私不外泄；</li>
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
        <form className="form-horizontal">
          <FormControls.Static type="text" label="手机：" labelClassName="col-sm-2" wrapperClassName="col-sm-8"><strong>13260717593</strong></FormControls.Static>
          <Input type="text" label="姓名：" labelClassName="col-sm-2" wrapperClassName="col-sm-2" />
          <Input type="text" label="小百合 ID：" labelClassName="col-sm-2" wrapperClassName="col-sm-5" help={<p><Glyphicon glyph="question-sign"/> 若没有小百合帐号可忽略此项，仅是用于区分是否为本校师生。</p>} />
          <div className="form-group">
            <label for="inputLocal" className="col-sm-2 control-label">校区：</label>
            <div className="col-sm-2">
              <div className="radio">
                <label><input type="radio" name="local" id="inputLocal" value="鼓楼" checked /> 鼓楼校区</label>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="radio">
                <label><input type="radio" name="local" id="inputLocal" value="仙林" /> 仙林校区</label>
              </div>
            </div>
          </div>
          <Input type="text" label="电脑型号：" labelClassName="col-sm-2" wrapperClassName="col-sm-8" help={<p><Glyphicon glyph="question-sign"/> 电脑型号可以查看发票、说明书标识，在电脑背面或电池下面也有电脑型号标签。</p>} />
          <Input type="text" label="操作系统：" labelClassName="col-sm-2" wrapperClassName="col-sm-8" help={<p><Glyphicon glyph="question-sign"/> 如：Win-XP, Win7-32位/64位, Win8-32位/64位, Win10-32位/64位, OS X, Ubuntu-32位/64位</p>} />
          <Input type="textarea" rows={4} label="问题描述：" labelClassName="col-sm-2" wrapperClassName="col-sm-8" help={<p><Glyphicon glyph="question-sign"/> 请描述目前电脑的问题，电脑出现问题的前后，自己有哪些异常操作，最好能明确是需要的帮助是软件上的还是硬件上的。描述故障时，请尽量描述清楚下列事项：故障的现象（例如系统无法启动、运行时风扇狂转），故障持续时间等。</p>} />
        </form>
      </div>
    )
  }
}
