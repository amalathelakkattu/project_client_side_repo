
import { createBrowserRouter } from "react-router-dom";
import { UserLayout } from "../layout/UserLayout";
import { Home } from "../pages/user/Home";
import { Signup } from "../pages/shared/Signup";
import { Login } from "../pages/shared/Login";
import { About } from "../pages/user/About";
import { Contact } from "../pages/user/Contact";
import { Product } from "../pages/user/Product";
import { ProductDetails } from "../pages/user/ProductDetails";
import { ErrorPage } from "../pages/shared/ErrorPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { SellerLayout } from "../layout/sellerLayout";
import { ProtectedRouteMentor } from "./ProtectedRouteSeller";
import { CreateNewProduct } from "../components/seller/CreateNewProduct";

const data = {};
export const router = createBrowserRouter([
    {
        path: "",
        element: <UserLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "",
                element: <Home/>,
            },
            {
                path: "signup",
                element: <Signup />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "about",
                element: <About/>,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "products",
                element: <Product />,
            },
            {
                path: "productDetails/:productId",
                element: <ProductDetails />,
            },
            {
                element: <ProtectedRoute/>,
                path: "user",
                children: [
                    {
                        path: "whishlist",
                        element: <Wishlist/>,
                    },
                    {
                        path: "profile",
                        element: <Profile/>,
                    },
                    {
                        path: "cart",
                        element: <Cart />,
                    },
                    {
                        path: "orders",
                        element: <Order/>,
                    },
                    {
                        path: "payment/success",
                        element: <h2>Payment success</h2>,
                    },
                ],
            },
        ],
    },
    {
        path: "Seller",
        element: <SellerLayout/>,
        errorElement: <ErrorPage role="seller" />,
        children: [
            {
                path: "login",
                element: <Login role="seller" />,
            },
            {
                path: "signup",
                element: <Signup role="seller" />,
            },
            {
                path:"",
                element: <ProtectedRouteMentor/>,
                children: [
                    {
                        path: "dashboard",
                    },
                    {
                        path: "products",
                    },
                    {
                        path: "profile",
                        element: <h1>Seller Profile page</h1>
                    },
                    {
                        path: "create-new-product",
                        element: <CreateNewProduct/>,
                    },
                ],
            },
        ],
    },
    {
        path: "admin",
        element: <SellerLayout/>,
        errorElement: <ErrorPage role="admin" />,
        children: [
            {
                path: "login",
                element: <Login role="admin" />,
            },
            {
                path: "signup",
                element: <Signup role="admin" />,
            },
        ],
    },
]);