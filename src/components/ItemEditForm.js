import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

export default function ItemEditForm({ items }) {
	const hasItems = Object.keys(items).length;

	return (
		<ListGroup className="ItemList">
			{hasItems !== 0 ?
				<Form as={ListGroup.Item}>
					<hr />
					{Object.entries(items).map(([key, value]) => {
						return (
							<div key={key}>
								<Form.Check type="checkbox">
									<Form.Check.Input type="checkbox" />
									<Form.Check.Label className="col-12 d-flex justify-content-between" type="checkbox">
										<span>{key}</span>
										<span>{value}</span>
									</Form.Check.Label>
								</Form.Check>
								<hr />
							</div>
						);
					})}
				</Form>
			:
				<ListGroup.Item>
					Start your shopping list!
				</ListGroup.Item>
			}
		</ListGroup>
	);
}
