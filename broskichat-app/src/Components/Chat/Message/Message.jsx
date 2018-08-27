import React from 'react';

const Message = props => {
	return(
		props.messages.map(message => {
			const classes = message.userId === props.userId? 'message is-info' : 'message is-success';
			const styles = message.userId === props.userId ? {} : { borderWidth: '0 4px 0 0', textAlign: 'right' };
			const ids = message.userId === props.userId ? message.keyId : message.echoId;
			return(
				<div className={classes} key={ids}>
					<p>Message User Id: {message.userId}</p>
					<p>Message uuid Id: {ids}</p>					
					<div className="message-body" style={styles}>{message.message}</div>
				</div>
			)
		})
	)
}

export default Message;
