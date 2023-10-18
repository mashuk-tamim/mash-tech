import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";
import AddProduct from "../pages/AddProduct/AddProduct";
import BrandDetails from "../pages/BrandDetails/BrandDetails";


const router = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: ([
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/brand/:id',
                element: <BrandDetails></BrandDetails>,
                loader: () => fetch('/brands.json')
            }

        ])
    }
]);
export default router;