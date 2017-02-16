import React, { Component } from "react";

export default class Search extends Component
{
	constructor(props) {
		super(props);
		this.inputTimer = null;
	}

	static PropTypes = {
		title: React.PropTypes.string,
		handleChange: React.PropTypes.object.isRequired,
		placeholder: React.PropTypes.string,
	}

	static defaultProps = {
		title: "",
		placeholder: ""
	}

	state = {
		inputContent: null
	}

	componentDidMount() {
			let inputTimer = null;

	}

	render() {
		return (<div className="itxia-search-view">
				<span className="search-label">{ this.props.title }</span>
				<input ref="input" type="search" placeholder={ this.props.placeholder } onChange= { this._handleInputChange.bind(this) }/>
				<span className="iconfont icon-search" onClick={this._handleSearchClickChange.bind(this)}></span>
			</div>);
	}

	_handleInputChange(event) {
		if (this.inputTimer) {
			window.clearTimeout(this.inputTimer);
			this.inputTimer = null;
		}

		this.inputTimer = window.setTimeout(() => {
			const value = this.refs["input"].value;
			if (value && value !== null) {
				this.setState({
					inputContent: value
				});
				this.props.handleChange(value);
			}
		}, 300);
	}

  _handleSearchClickChange(event) {
    const value = this.refs["input"].value;
    if (value && value !== null) {
      this.props.handleChange(value);
    }
  }
}
