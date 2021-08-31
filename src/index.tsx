import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App'
import { GlobalStyle } from './Styles'

const client = new QueryClient()

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />

		<QueryClientProvider client={client}>
			<App />
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
