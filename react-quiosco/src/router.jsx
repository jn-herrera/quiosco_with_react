import { createBrowserRouter, createHashRouter } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Layout from './layouts/Layout'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />
    },
    {
        path: '/auth',
        element: <AuthLayout />
    }
])

export default router