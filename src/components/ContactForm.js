import React from 'react';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

export default class MyForm extends React.Component {
	constructor(props) {
		super(props);
		this.submitForm = this.submitForm.bind(this);
		this.state = {
			status: ''
		};
	}

	render() {
		const { status } = this.state;
		return (
			<Container style={{ padding: `20px` }}>
				<form
					onSubmit={this.submitForm}
					action="https://formspree.io/mqkyekqz"
					method="POST"
					autoComplete="off"
					noValidate
				>
					{/* <!-- add your custom form HTML here --> */}
					{/* <label htmlFor="email">Email:</label> */}
					<TextField
						id="standard-basic-firstname"
						type="text"
						name="first-name"
						label="First Name"
						variant="outlined"
					/>
					<TextField id="standard-basic-lastname" type="text" name="last-name" label="Last Name" variant="outlined" />
					<TextField id="standard-basic-email" type="email" name="email" label="Email" fullWidth variant="outlined" />
					{/* <input type="email" name="email" /> */}
					{/* <label htmlFor="message">Message:</label> */}
					{/* <input type="text" name="message" /> */}
					<TextField
						id="standard-basic-message"
						type="text"
						name="message"
						label="Send me a message"
						fullWidth
						multiline
						rows={6}
						variant="outlined"
						data-shrink="false"
					/>
					{status === 'SUCCESS' ? <p>Thanks!</p> : <button>Submit</button>}
					{status === 'ERROR' && <p>Enter valid Email</p>}
				</form>
			</Container>
		);
	}

	submitForm(ev) {
		ev.preventDefault();
		const form = ev.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader('Accept', 'application/json');
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
				this.setState({ status: 'SUCCESS' });
			} else {
				this.setState({ status: 'ERROR' });
			}
		};
		xhr.send(data);
	}
}
