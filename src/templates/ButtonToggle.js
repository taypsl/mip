import React, { Component } from 'react'

export default class ButtonToggle extends Component {
	constructor(props) {
		super(props)
		this.state = { 
			stylePath: '/styles/classic.css',
			buttonPressed: false
		}
		this.handleButtonClick = this.handleButtonClick.bind(this)
		this.resetButtonClick = this.resetButtonClick.bind(this)
	}

	handleButtonClick() {
		this.setState({ 
			stylePath: '/styles/8-bit.css',
			buttonPressed: true })
	}

	resetButtonClick() {
		this.setState({
			stylePath: '/styles/classic.css'
		})
	}

	render() {
		return (
			<div className="Button-toggle">
				<link rel="stylesheet" type="text/css" href={this.state.stylePath} />
        <button type="button" onClick={this.handleButtonClick}>Click to update stylesheet</button>
        <div 	className={this.state.buttonPressed ? ' ' : 'hidden '}
        			onClick={this.resetButtonClick}>
        			Reset
        </div>
			</div>
		)
	}
}