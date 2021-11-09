import React, { useState } from 'react'

const AddItemForm = props => {
	const initialFormState = { id: null, name: '', description: '' ,price:'', quantity:'',date:''}
	const [ item, setItem ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setItem({ ...item, [name]: value })
	}

	return (
		<form className='AddForm'
			onSubmit={event => {
				event.preventDefault()
				if (!item.name || !item.price) return

				props.addItem(item)
				setItem(initialFormState)
			}}
		>
			<label>Name</label>
			<input type="text" name="name" value={item.name} onChange={handleInputChange} />
			<label>Description</label>
			<input type="text" name="description" value={item.description} onChange={handleInputChange} />
			<label>Price</label>
			<input type="text" name="price" value={item.price} onChange={handleInputChange} />
			<label>Quantity</label>
			<input type="text" name="quantity" value={item.quantity} onChange={handleInputChange} />
			<label>Date</label>
			<input type="text" name="date" value={item.date} onChange={handleInputChange} />
			<button>Add new Item</button>
		</form>
	)
}

export default AddItemForm