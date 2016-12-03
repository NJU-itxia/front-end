/**
 * Created by qixin on 02/12/2016.
 */
import React,{Component} from 'react';
import { Panel, ButtonToolbar, Button, Input, Collapse,Tooltip,OverlayTrigger, FieldGroup } from "react-bootstrap";

export default class CurrentOrder extends Component {
	constructor(props) {
		super(props);

	}

	state = {
		name: "IT侠: demo",
		createdTime:"2016-10-21 18:19:40",
		phoneNumber: 1111111,
		bbsId: "小白和账号",
		machineModel: "联想",
		OS: "window 10",
		description: "暂无",
		messages: [ {
			userName: "test",
			time:"2016-10-21 18:19:40",
			content: "just a test message"
		}, {
			userName: "test",
			time:"2016-10-21 18:19:40",
			content: "just a test message"
		}],
		messageViewStatus: false,
		deleteBtnsStatus: [false, false]
	};


	render() {
		const tooltip = (
			<Tooltip id="tooltip"><img src="/img/nju-itxia.jpg" height="150" /></Tooltip>
		);
		console.log(this.props);
		return (
			<div className="itxia-current-order">
				<header className="current-order-header">
					<h1>请求状态</h1>
					<hr className="colorgraph" />
				</header>
				<main className="main">
					<div className="order-info">
						<Panel className={ this.props.className } header={<h3>{this.state.name}</h3>} bsStyle= 'warning'>
							<p><strong>提交时间: </strong>{ this.state.createdTime }</p>
							<p><strong>手机号码: </strong><a href={"tel:" + this.state.phoneNumber}>{this.state.phoneNumber}</a></p>
							<p><strong>百合帐号: </strong>{this.state.bbsId}</p>
							<p><strong>电脑型号: </strong>{this.state.machineModel}</p>
							<p><strong>操作系统: </strong>{this.state.OS}</p>
							<p><strong>问题描述: </strong>{this.state.description}</p>

							{/*<FieldGroup*/}
								{/*id="formControlsFile"*/}
								{/*type="file"*/}
								{/*label="File"*/}
								{/*help="Example block-level help text here."*/}
							{/*/>*/}
						<ButtonToolbar>
							<Button bsStyle="warning" >修改请求</Button>
							<Button bsStyle="danger"> 删除请求</Button>
							<Button >
								{ this.state.messageViewStatus ? "收起回复信息(" + this.state.messages.length + ")"  : "展开回复信息(" + this.state.messages.length + ")" }
							</Button>
						</ButtonToolbar>
						<Collapse refs="order-message-view" in={ this.state.messageViewStatus }>
							<div className="message-content">
								<Input className="textarea" type="textarea" placeholder="请输入回复内容……" />
								<Button bsStyle="primary" block>回复</Button>
							</div>
						</Collapse>
					</Panel>
					</div>

					<div className="board">
						<Panel className='reminder' header={<h3> 友情提醒</h3>} bsStyle= 'primary'>
							<div className="panel-body">
								<ul>
									<li>你的预约提交后， IT侠将会立刻收到邮件提醒， 如果IT侠对你的预约有疑问，他会在站内回复你； </li>
									<li>如果你填写了邮箱，你现在应该已经收到了一封通知邮件，请确保该邮件不被标记为垃圾邮件； IT侠后续的站内回复会通过邮件推送给你;</li>
									<li>
										<strong>如果你没有填写邮箱，请定期登录本站查看回复;</strong>
									</li>
									<li> 我们平均每周利用1-2个晚上集中处理预约，处理当天会有短信或电话通知； </li>
									<li>请尽可能详细地、清晰地描述你的问题，包括你采取过哪些措施，为什么要装系统等等； </li>
									<li>
										IT侠团队的成员有自己的工作和学习任务，因此我们很难保证所有的预约都能被解决，
										但我们愿意尽我们最大的努力做好这项志愿服务；
									</li>
									<li>
										更多信息，请关注IT侠官方微信公众号：
										<OverlayTrigger placement="top" overlay={tooltip}>
											<a rel="tooltip" href="/img/nju-itxia.jpg">NJU-itxia</a>

										</OverlayTrigger>

									</li>
								</ul>
							</div>
						</Panel>

						<Panel className="service-agreement" header={<h3>IT侠的服务约定</h3>} bsStyle='success'>
							<div className="panel-body">
								<ol>
									<li>IT侠提供纯公益性质的服务，服务过程中不收取任何费用；</li>
									<li>IT侠服务对象为南京大学在校师生以及为IT侠提供过捐助的爱心人士；</li>
									<li>IT侠视个人资料为绝密信息，保证不在服务过程泄露服务对象隐私； </li>
									<li>
										依业界惯例，IT侠不对以下情形负责：

										<ul>
											<li> 在IT侠操作没有过失前提下的数据意外丢失； </li>
											<li> 由于机器老化和用料低端等原因，在拆装过程中可能发生的卡扣折断、螺母碎裂等情形； </li>
											<li> 对处于不稳定边缘的、有潜在故障风险的机器（如显卡门机器），拆装之后发生无法开机的情形； </li>
											<li> 其它非IT侠操作过失造成的意外； </li>
										</ul>
									</li>
									<li> 对于用户没有购买的软件，IT侠顶多帮助安装试用版； </li>
									<li> 本服务的最终解释权归南京大学IT侠服务团队所有。</li>
								</ol>
							</div>
						</Panel>
					</div>

				</main>
			</div>
		);
	}
}
