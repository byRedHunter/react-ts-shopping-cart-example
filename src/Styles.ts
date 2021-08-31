import { IconButton } from '@material-ui/core'
import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #035;
    color: #eee;
  }

  img {
    max-width: 100%;
  }

  svg.MuiSvgIcon-root {
    fill: #3ff;
  }
`

export const Wrapper = styled.div`
	width: 90%;
	max-width: 1200px;
	margin: 0 auto;
`

export const Title = styled.h1`
	color: #3ff;
	margin: 40px 0;
`

export const WrapperItem = styled.article`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	width: 100%;
	border: 5px solid #399;
	border-radius: 10px;
	overflow: hidden;

	button {
		background: #3ff;
		color: #111;
		border-radius: 0;
		&:hover {
			background: #399;
			color: #fff;
		}
	}

	img {
		max-height: 250px;
		object-fit: cover;
	}
	div {
		padding: 0 20px;
	}
	h3 {
		margin: 20px 0;
	}
	p {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		line-clamp: 3;
		box-orient: vertical;
		width: 100%;
		height: 50px;
	}
`

export const StyledButton = styled(IconButton)`
	position: fixed;
	z-index: 5;
	right: 20px;
	top: 20px;
	background: #555;
`

export const WrapperCart = styled.aside`
	width: 320px;
	padding: 20px;
	@media screen and (min-width: 768px) {
		width: 500px;
	}

	h2 {
		margin-bottom: 20px;
	}
`

export const WrapperCartItem = styled.div`
	border: 2px solid #399;
	padding: 10px;
	border-radius: 5px;
	margin-bottom: 15px;
	.information {
		margin: 20px 0;
		display: flex;
		justify-content: space-between;
	}
	.buttons {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	img {
		width: 30%;
		display: block;
		margin: 20px auto 0;
	}
`
