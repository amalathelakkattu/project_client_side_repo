import React from "react";
import { Footer } from "../components/user/Footer";
import { Outlet } from "react-router-dom";
import { Header } from "../components/user/Header";
import { SellerHeader } from "../components/seller/SellerHeader";

export const SellerLayout = () => {
    const isUserAuth = true;

    return (
        <div>
            {isUserAuth ? <SellerHeader/> : <Header />}

            <div className="min-h-96">
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};