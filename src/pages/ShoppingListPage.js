import { useState, useRef, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Stack from 'react-bootstrap/Stack';

import { useApi } from '../contexts/ApiProvider';
import { useFlash } from '../contexts/FlashProvider';

import ItemEditForm from '../components/ItemEditForm';
import AddItemForm from '../components/AddItemForm';
import Body from '../components/Body';

export default function ShoppingList() {
	const [formErrors, setFormErrors] = useState({});
	const itemField = useRef();
	const quantityField = useRef();
	const [items, setItems] = useState();
	const api = useApi();
	const flash = useFlash();

	useEffect(() => {
		(async () => {
			const response = await api.get('/shopping');
			setItems(response.ok ? response.body.items : {});
		})();
	}, [api]);

	const onSubmit = async (event) => {
		event.preventDefault();
		const item = itemField.current.value;
		const quantity = Number(quantityField.current.value);
		const errors = {};

		if (quantity === undefined) {
			errors.quantity = "Quantity must not be empty";
		} else if (quantity < 0) {
			errors.quantity = "Quantity must be greater than zero";
		} else if (quantity === 0 && !items[item]) {
			errors.quantity = "Cannot remove item that isn't in your shopping list";
		}
		
		if (item === undefined) {
			errors.item = "Item must not be empty";
		}

		setFormErrors(errors)
		if (Object.keys(errors).length > 0) {
			return;
		}

		if (quantity === 0 && items[item] !== null) {
			delete items[item];
			setItems(Object.keys(items).length === 0 ? {} : {...items});
		} else {
			setItems({...items, [item]: quantity});
		}

		setFormErrors({});
	}

	const onCommit = async (event) => {
		event.preventDefault();
		const commit = await api.post('/shopping', {items: items});
		if (commit.ok) {
			flash('Shopping list successfully committed', 'success');
		} else {
			flash('Error during commit', 'danger');
		}
	}

	return (
		<Body>
			<div className="col-6">
				<h1>Your Shopping List</h1>
				{items === undefined ?
					<div className="d-flex justify-content-center">
						<Spinner animation="border" />
					</div>
				:
					<>
						<ItemEditForm items={items} />
						<hr />
						<Stack gap={4}>
							<div className="d-flex justify-content-center">
								<AddItemForm formErrors={formErrors} itemField={itemField} quantityField={quantityField} onSubmit={onSubmit} />
							</div>
							<div className="d-flex justify-content-center">
								<Stack direction="horizontal" gap={3}>
									<Button variant="primary" onClick={onSubmit}>Add</Button>
									<Button variant="warning" onClick={onCommit}>Commit</Button>
								</Stack>
							</div>
						</Stack>
						<hr />
					</>
				}
			</div>
		</Body>
	);
}
