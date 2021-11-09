import React, { useState, useEffect } from 'react'

const EditItemForm = props => {
  const [ item, setItem ] = useState(props.currentItem)

  useEffect(
    () => {
      setItem(props.currentItem)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setItem({ ...item, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateItem(item.id, item)
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
      <button>Update Item</button>
      <button onClick={() => props.setEditing(false)} className="button">
        Cancel
      </button>
    </form>
  )
}

export default EditItemForm