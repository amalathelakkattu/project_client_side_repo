import React from 'react'
import { useNavigate } from "react-router-dom";

export const ProductCards = (product) => {
    const navigate = useNavigate();

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={product?.img} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {product?.title}
                    {/* <div className="badge badge-secondary">NEW</div> */}
                </h2>
                <p>{product?.price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/product/${product?.id}`} className="text-blue-500 hover:underline" onClick={() => navigate(`/ProductDetails/${product?._id}`)}>Read More</Link>

                    <div className="badge badge-outline">Add to Cart</div>
                    <div className="badge badge-outline">Buy Now</div>
                </div>
            </div>
        </div>
    )
}
