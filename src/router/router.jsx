import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";
import AddProduct from "../pages/AddProduct/AddProduct";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import BrandProducts from "../pages/BrandProducts/BrandProducts";


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
                path: "/cart",
                element: <Cart></Cart>,
            },
            {
                path: "/addProduct",
                element: <AddProduct></AddProduct>,
            },
            {
                path: "/updateProduct",
                element: <UpdateProduct></UpdateProduct>,
            },
            {
                path: "/brand/:id",
                element: <BrandProducts></BrandProducts>,
                loader: () => fetch("/brands.json"),
            },
        ],
    },
]);
export default router;