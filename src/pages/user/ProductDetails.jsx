import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../config/axiosInstance";

export const ProductDetails = () => {
    const params = useParams();
    const { productId } = params;

     const [productDetails, setProductDetails] = useState({});

    const fetchProducts = async () => {
        try {
            const response = await axiosInstance({
                method: "GET",
                url: `/products/product-details/${productId}`,
            });
            
            setProductDetails(response?.data?.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
      fetchProducts();
    }, []);

    return (
        <div>
            <section>
                <h2 className="text-2xl font-bold">Product Details Page</h2>
            </section>
            <section>
                <h2 className="text-3xl font-bold">{productDetails?.title} </h2>
                <h2 className="text-2xl font-bold">{productDetails?.price} </h2>
                <p className="text-md font-semibold">{productDetails?.description} </p>
                <img src={productDetails?.image} alt="" />
            </section>
        </div>
    );
};
