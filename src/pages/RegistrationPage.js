import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useApi } from '../contexts/ApiProvider';
import { useFlash } from '../contexts/FlashProvider';

import InputField from '../components/InputField';
import Body from '../components/Body';

export default function RegistrationPage() {
	const [formErrors, setFormErrors] = useState({});
	const usernameField = useRef();
	const emailField = useRef();
	const passwordField = useRef();
	const password2Field = useRef();
	const navigate = useNavigate();
	const flash = useFlash();
	const api = useApi();

	useEffect(() => {
		usernameField.current.focus();
	}, []);

	const onSubmit = async (event) => {
		event.preventDefault();
		if (passwordField.current.value !== password2Field.current.value) {
			setFormErrors({password2: "Passwords do not match"});
		} else {
			const response = await api.post('/users',{
				username: usernameField.current.value,
				email: emailField.current.value,
				password: passwordField.current.value,
			});
			if (!response.ok) {
				setFormErrors(response.body.messages);
			} else {
				setFormErrors({});
				flash('You have successfully registered', 'success');
				navigate('/login');
			}
		}
	}
	
	return (
		<Body>
			<div className="col-6">
				<h1>Register</h1>
				<Form onSubmit={onSubmit}>
					<InputField name="username" label="Username"
						error={formErrors.username} fieldRef={usernameField} />
					<InputField name="email" label="Email address"
						error={formErrors.email} fieldRef={emailField} />
					<InputField name="password" label="Password" type="password"
						error={formErrors.password} fieldRef={passwordField} />
					<InputField name="password2" label="Repeat password" type="password"
						error={formErrors.password2} fieldRef={password2Field} />
					<Button variant="primary" type="submit">Submit</Button>
				</Form>
			</div>
		</Body>
	);
}
