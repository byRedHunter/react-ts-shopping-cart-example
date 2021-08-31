import React from 'react'
import { WrapperCartItem } from '../Styles'
import { CartItemType } from '../App'
import { Button } from '@material-ui/core'

type Props = {
	item: CartItemType
	addToCart: (clickedItem: CartItemType) => void
	removeFromCart: (id: number) => void
}

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
	return (
		<WrapperCartItem>
			<h3> {item.title} </h3>
			<div className='information'>
				<p>Price: ${item.price} </p>
				<p>Total: ${(item.amount * item.price).toFixed(2)} </p>
			</div>
			<div className='buttons'>
				<Button
					size='small'
					disableElevation
					variant='contained'
					onClick={() => removeFromCart(item.id)}
				>
					-
				</Button>
				<p> {item.amount} </p>
				<Button
					size='small'
					disableElevation
					variant='contained'
					onClick={() => addToCart(item)}
				>
					+
				</Button>
			</div>
			<img src={item.image} alt={item.title} />
		</WrapperCartItem>
	)
}

export default CartItem
