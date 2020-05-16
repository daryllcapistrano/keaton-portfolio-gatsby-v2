import React from 'react';
import Card from '@material-ui/core/Card';
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
			<Card>
				<form
					onSubmit={this.submitForm}
					action="https://formspree.io/mqkyekqz"
					method="POST"
					autoComplete="off"
					noValidate
				>
					{/* <!-- add your custom form HTML here --> */}
					<label htmlFor="email">Email:</label>
					<TextField id="standard-basic" type="email" name="email" />
					{/* <input type="email" name="email" /> */}
					<label htmlFor="message">Message:</label>
					{/* <input type="text" name="message" /> */}
					<TextField id="standard-basic" type="text" name="message" />
					{status === 'SUCCESS' ? <p>Thanks!</p> : <button>Submit</button>}
					{status === 'ERROR' && <p>Ooops! There was an error.</p>}
				</form>
			</Card>
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
