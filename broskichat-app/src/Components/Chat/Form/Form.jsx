import React, { Component } from 'react';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'

class Form extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<form action="#">
				<section className="toolbox">
					<div className="dropdown is-hoverable is-up">
						<div className="dropdown-trigger">
							<button type="button" className="button is-warning">
								<span><FA icon="smile" /></span>
							</button>
						</div>
						<div className="dropdown-menu">
							<div className="dropdown-content has-background-black">
								<div className="dropdown-item">
									<div className="columns is-mobile">
										<div className="column">
											<a className="navbar-item has-text-white"><FA icon="smile" /></a>
											<a className="navbar-item has-text-white"><FA icon="toolbox" /></a>
											<a className="navbar-item has-text-white"><FA icon="share" /></a>
										</div>
										<div className="column">
											<a className="navbar-item has-text-white"><FA icon="smile" /></a>
											<a className="navbar-item has-text-white"><FA icon="toolbox" /></a>
											<a className="navbar-item has-text-white"><FA icon="share" /></a>
										</div>
										<div className="column">
											<a className="navbar-item has-text-white"><FA icon="smile" /></a>
											<a className="navbar-item has-text-white"><FA icon="toolbox" /></a>
											<a className="navbar-item has-text-white"><FA icon="share" /></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<div className="field">
					<p className="control has-icons-left has-icons-right">
						<textarea
							value={this.props.value}
							onChange={this.props.onChange}
							className="textarea" type="text" name="message" placeholder="Start Chatting By Typing A Message." />
					</p>
					<button onClick={this.props.onClick} className="button is-info is-medium is-fullwidth">Send</button>
				</div>
			</form>
		) 
	}	
}

export default Form;