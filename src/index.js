import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { store } from './store'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import { CardDataProvider } from './contextProvider'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <ChakraProvider>
        <CardDataProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </CardDataProvider>
    </ChakraProvider>
)
