import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";
import AddProduct from "../pages/AddProduct/AddProduct";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import BrandProducts from "../pages/BrandProducts/BrandProducts";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Login from "../pages/Login/Login";
import PrivateRoute from './PrivateRoute';
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/carts",
                element: (
                    <PrivateRoute>
                        <Cart></Cart>
                    </PrivateRoute>
                ),
            },
            {
                path: "/addProduct",
                element: (
                    
                        <AddProduct></AddProduct>
                    
                ),
            },
            {
                path: "/updateProduct/:id",
                element: (
                    <PrivateRoute>
                        <UpdateProduct></UpdateProduct>
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(
                        `https://mash-tech-server-drq2abpar-mashuk-tamims-projects.vercel.app/products/${params.id}`
                    ),
            },
            {
                path: "/brand/:id",
                element: <BrandProducts></BrandProducts>,
                loader: () => fetch("/brands.json"),
            },
            {
                path: "/details/:id",
                element: (
                    <PrivateRoute>
                        <ProductDetails></ProductDetails>
                    </PrivateRoute>
                ),
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ],
    },
]);
export default router;
