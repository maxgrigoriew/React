import React, { Component } from "react"

export default class Status extends Component {
	state = {
		editMode: false,
		status: this.props.status,
	}
	activateEditMode = () => {
		this.setState({
			editMode: true,
			status: this.props.status,
		})
	}

	componentDidUpdate(prevProps, prefState) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status,
			})
		}
	}
	deactivateMode = () => {
		this.setState({
			editMode: false,
		})
		this.props.updateStatus(this.state.status)
	}

	onStatusChange = (e) => {
		this.setState({
			status: e.currentTarget.value,
		})
	}
	render() {
		return (
			<div>
				{!this.state.editMode && (
					<div>
						<span onClick={this.activateEditMode}>
							{this.props.status || "Введите статус..."}
						</span>
					</div>
				)}
				{this.state.editMode && (
					<div>
						<input
							onChange={this.onStatusChange}
							onBlur={this.deactivateMode}
							autoFocus="true"
							type="text"
							value={this.state.status}></input>
					</div>
				)}
			</div>
		)
	}
}
