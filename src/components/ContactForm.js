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
			<Container
				style={{
					padding: `0`,
					paddingTop: `24px`
				}}
			>
				<Container>
					<h3>Contact Me</h3>
				</Container>
				<form
					onSubmit={this.submitForm}
					action="https://formspree.io/mqkyekqz"
					method="POST"
					autoComplete="off"
					noValidate
				>
					<Container style={{ padding: `0` }}>
						<TextField
							id="standard-basic-firstname"
							type="text"
							name="first-name"
							label="First Name"
							fullWidth
							variant="outlined"
							style={{ margin: `5px` }}
						/>
						<TextField
							id="standard-basic-lastname"
							type="text"
							name="last-name"
							label="Last Name"
							fullWidth
							variant="outlined"
							style={{ margin: `5px` }}
						/>
					</Container>

					<TextField
						id="standard-basic-email"
						type="email"
						name="email"
						label="Email"
						fullWidth
						variant="outlined"
						style={{ margin: `5px` }}
					/>

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
						style={{ margin: `5px` }}
					/>
					{status === 'SUCCESS' ? <p>Thanks! I'll contact you shortly</p> : <button>Submit</button>}
					{status === 'ERROR' && <p>Please enter a message</p>}
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
