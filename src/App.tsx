import { useState } from 'react'
import { useQuery } from 'react-query'

// components material
import Drawer from '@material-ui/core/Drawer'
import LinearProgress from '@material-ui/core/LinearProgress'
import Grid from '@material-ui/core/Grid'
import Badge from '@material-ui/core/Badge'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'

// styles
import { Wrapper, Title, StyledButton } from './Styles'
import Item from './components/Item'
import Cart from './components/Cart'

// types
export interface CartItemType {
	id: number
	category: string
	description: string
	image: string
	price: number
	title: string
	amount: number
}

const getProducts = async (): Promise<CartItemType[]> =>
	await (await fetch('https://fakestoreapi.com/products')).json()

const App = () => {
	const [cartOpen, setCartOpen] = useState(false)
	const [cartItems, setCartItems] = useState<CartItemType[]>([])

	const { data, isLoading, error } = useQuery<CartItemType[]>(
		'products',
		getProducts
	)

	const getTotalItems = (items: CartItemType[]) => {
		const totalItem = items.reduce((ack: number, item) => ack + item.amount, 0)

		return totalItem
	}

	const handleAddToCart = (clickedItem: CartItemType) => {
		setCartItems((prev) => {
			// is the item already added in the cart?
			const isItemInCart = prev.find((item) => item.id === clickedItem.id)

			if (isItemInCart) {
				return prev.map((item) =>
					item.id === clickedItem.id
						? { ...item, amount: item.amount + 1 }
						: item
				)
			}

			// first time the item is added
			return [...prev, { ...clickedItem, amount: 1 }]
		})
	}

	const handleRemoveFromCart = (id: number) => {
		setCartItems((prev) =>
			prev.reduce((ack, item) => {
				if (item.id === id) {
					if (item.amount === 1) return ack

					return [...ack, { ...item, amount: item.amount - 1 }]
				} else {
					return [...ack, item]
				}
			}, [] as CartItemType[])
		)
	}

	const toggleCart = () => {
		setCartOpen((state) => !state)
	}

	if (isLoading) return <LinearProgress />
	if (error) return <div>Something went wrong...</div>

	return (
		<>
			<Drawer anchor='right' open={cartOpen} onClose={toggleCart}>
				<Cart
					cartItems={cartItems}
					addToCart={handleAddToCart}
					removeFromCart={handleRemoveFromCart}
				/>
			</Drawer>

			<StyledButton onClick={toggleCart}>
				<Badge badgeContent={getTotalItems(cartItems)} color='error'>
					<AddShoppingCartIcon />
				</Badge>
			</StyledButton>

			<Wrapper>
				<Title>Products</Title>

				<Grid container spacing={3}>
					{data?.map((item) => (
						<Grid item key={item.id} xs={12} sm={6} md={4}>
							<Item item={item} handleAddToCart={handleAddToCart} />
						</Grid>
					))}
				</Grid>
			</Wrapper>
		</>
	)
}

export default App
