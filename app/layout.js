'use client'

import './globals.css'
import Navbar from '../src/components/Navbar'
import store from '../src/redux/store'
import { Provider } from 'react-redux'

export default function RootLayout({ children }) {
	return (
		<html lang='RU'>
			<body>
				<Provider store={store}>
					<Navbar />
					{children}
				</Provider>
			</body>
		</html>
	)
}
