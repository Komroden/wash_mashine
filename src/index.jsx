import React from 'react'
// eslint-disable-next-line import/order
import ReactDOM from 'react-dom/client'

import './index.scss'

import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'

import App from './pages/App/App'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
