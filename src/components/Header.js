import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import Instructions from './Instructions';

import { useUser } from '../contexts/UserProvider';

export default function Header() {
	const expand = false;
	const { user, logout } = useUser();

	return (
		<Navbar bg="light" sticky="top" className="Header" expand={expand}>
			<Container fluid>
				<NavbarToggle />
				<Navbar.Offcanvas placement="start">
					<Offcanvas.Header closeButton>
						<Offcanvas.Title>Help</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body><Instructions /></Offcanvas.Body>
				</Navbar.Offcanvas>
				<Navbar.Brand as={NavLink} to="/">
					<Image src="/cart.svg" height="30" width="30"/>
					&nbsp;
					Shopper
				</Navbar.Brand>
				<div className="justify-content-end Dropdown">
					{user !== null &&
						<NavDropdown align="end" title={
							<Image src="https://www.gravatar.com/avatar/8455938a1db5c475a87d76edacb6284e?d=identicon&s=32" roundedCircle/>
						}>
							<NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
						</NavDropdown>
					}
				</div>
			</Container>
		</Navbar>
	);
}
