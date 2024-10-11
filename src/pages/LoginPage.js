import { useEffect, useState, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useUser } from '../contexts/UserProvider';
import { useFlash } from '../contexts/FlashProvider';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import InputField from '../components/InputField';
import Body from '../components/Body';

export default function RegistrationPage() {
	const [formErrors, setFormErrors] = useState({});
	const usernameField = useRef();
	const passwordField = useRef();
	const { login } = useUser();
	const { state } = useLocation();
	const navigate = useNavigate();
	const flash = useFlash();

	useEffect(() => {
		usernameField.current.focus();
	}, []);

	const onSubmit = async (event) => {
		event.preventDefault();
		const username = usernameField.current.value;
		const password = passwordField.current.value;

		const errors = {};
		if (!username) {
			errors.username = 'Username must not be empty';
		}

		if (!password) {
			errors.password = 'Password must not be empty';
		}

		setFormErrors(errors);
		if (Object.keys(errors).length > 0) {
			return;
		}

		const result = await login(username, password);
		if (result === 'fail') {
			flash('Incorrect username or password', 'danger');
		} else if (result === 'ok') {
			const next = (state && state.next) ? state.next : '/';
			navigate(next);
		}
	}
	
	return (
		<Body>
			<div className="col-6">
				<h1>Login</h1>
				<Form onSubmit={onSubmit}>
					<InputField name="username" label="Username"
						error={formErrors.username} fieldRef={usernameField} />
					<InputField name="password" label="Password" type="password"
						error={formErrors.password} fieldRef={passwordField} />
					<Button variant="primary" type="submit">Submit</Button>
				</Form>
				<hr />
				<p>Don&apos;t have an account? <Link to="/register">Register here</Link>!</p>
			</div>
		</Body>
	);
}
