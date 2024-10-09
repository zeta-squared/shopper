import { useState, useRef } from 'react';

import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

import InputField from './InputField';

export default function AddItemForm({ formErrors, itemField, quantityField, onSubmit }) {
	return (
		<Form className="AddItemForm" onSubmit={onSubmit}>
			<Stack className="align-items-start" direction="horizontal" gap={3}>
				<InputField name="item" label="Item"
					error={formErrors.item} fieldRef={itemField} />
				<InputField name="quantity" label="Quantity" type="number"
					error={formErrors.quantity} fieldRef={quantityField} />
			</Stack>
		</Form>
	);
}
