import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router';
import AuthProvider from './providers/AuthProvider';
import ThemeProvider from './providers/ThemeProvider';

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <ThemeProvider>
                <RouterProvider router={router}></RouterProvider>
            </ThemeProvider>
        </AuthProvider>
    </React.StrictMode>
);
