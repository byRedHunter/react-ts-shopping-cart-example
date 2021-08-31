import React from 'react'
import { Button } from '@material-ui/core'
import { CartItemType } from '../App'
import { WrapperItem } from '../Styles'

type Props = {
	item: CartItemType
	handleAddToCart: (clickedItem: CartItemType) => void
}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
	return (
		<WrapperItem>
			<img src={item.image} alt={item.title} />

			<div>
				<h3>{item.title}</h3>
				<p> {item.description} </p>
				<h3> ${item.price} </h3>
			</div>

			<Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
		</WrapperItem>
	)
}

export default Item
