import React, { Component } from "react"

export default class Status extends Component {
	state = {
		editMode: false,
	}
	activateEditMode = () => {
		this.setState({
			editMode: true,
		})
	}
	deactivateMode() {
		this.setState({
			editMode: false,
		})
	}
	render() {
		return (
			<div>
				{!this.state.editMode && (
					<div>
						<span onClick={this.activateEditMode}>{this.props.status}</span>
					</div>
				)}
				{this.state.editMode && (
					<div>
						<input
							onBlur={this.deactivateMode.bind(this)}
							autoFocus="true"
							type="text"
							value={this.props.status}></input>
					</div>
				)}
			</div>
		)
	}
}
