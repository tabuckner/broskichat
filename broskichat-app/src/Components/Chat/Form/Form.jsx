import React, { Component } from 'react';

class Form extends Component {
	render() {
		return (
			<form action="#">
				<div className="field">
					<label className="label">Message</label>
					<p className="control">
						<input
							value={this.props.message}
							onChange={this.props.onChange}
							className="input" type="text" name="message" placeholder="Enter Message" />
					</p>
				</div>
				<button onClick={this.props.onClick} className="button is-info">Send</button>
			</form>
		) 
	}	
}

export default Form;