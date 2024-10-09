export default function Instructions() {
	return (
		<>
			<p>
				Shopper is a simple shopping list web application. The purpose of this project was to learn the React framework and develop an SPA that integrates with a backend API. The application incorporates authentication of users and form submissions. It also handles dynamic rendering, such as updating your shopping list when you include new items or change quantities.
			</p>
			<p>
				In its current form the shopping list allows you to add an item and respective quantity. You will see two fields labelled "Item" and "Quantity". The "Item" field is a text field where you can enter the name of your item. The "Quantity" field is a number field, which expects a number bigger than zero.
			</p>
			<p>
				In addition to these two fields, there are two buttons; "Add" and "Commit". The "Add" button allows you to add new items to your shopping list. If the item is currently in your shopping list, pressing "Add" with the items' name and a new quantity in the "Item" and "Quantity" fields will update the shopping list to the new value. The "Commit" button is for when you are ready to commit the changes to your shopping list. By pressing "Commit" your latest shopping list will be sent to the server which hosts the database and update your data with the new shopping list. Please note, if you <strong>do not</strong> commit, any changes you make to your shopping list will not be saving in the database.
			</p>
			<p>
				For now the only method to delete an item from your shopping list is to type in the items name in the "Item" field and set the "Quantity" to 0 then press the "Add" button. I will eventually add a delete button that will work with the current select form in the shopping list.
			</p>
		</>
	)
}
