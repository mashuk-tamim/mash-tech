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
import PrivateRoute from "./PrivateRoute";
import Register from "../pages/Register/Register";
import Blog from "../pages/Blog/Blog";
import AddBlog from "../pages/AddBlog/AddBlog";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import AddReview from "../pages/AddReview/AddReview";
import AddUpcoming from "../pages/AddUpcoming/AddUpcoming";

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
                    <PrivateRoute>
                        <AddProduct></AddProduct>
                    </PrivateRoute>
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
                        `https://mash-tech-server.vercel.app/products/${params.id}`
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
                element: <Register></Register>,
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
            },
            {
                path: "/addBlog",
                element: <AddBlog></AddBlog>,
            },
            {
                path: "/blogDetails/:id",
                element: (
                    <PrivateRoute>
                        <BlogDetails></BlogDetails>
                    </PrivateRoute>
                ),
            },
            {
                path: "/addReview",
                element: (
                    <PrivateRoute>
                        <AddReview></AddReview>
                    </PrivateRoute>
                ),
            },
            {
                path: "/upcoming",
                element: (
                    <PrivateRoute>
                        <AddUpcoming></AddUpcoming>
                    </PrivateRoute>
                ),
            },
        ],
    },
]);
export default router;
