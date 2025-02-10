import React, { useState } from "react";
import { Carrousel } from "../../components/user/Carrousel";

export const Home = () => {
  const [user, setUser] = useState("User");

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with Welcome User and Image */}
      <header className="bg-base-200 p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="text-xl font-bold">Ecommerce App</div>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
            <button className="btn btn-primary">Sign In</button>
          </div>
        </div>
        <div className="flex gap-20 items-center">
          <div className="w-8/12">
            <h1 className="font-bold text-4xl my-5">Welcome, {user}!</h1>
            <p className="text-lg">
              Discover the best products and deals tailored just for you.
            </p>
          </div>
          <div className="w-5/12">
            <img
              className="w-full rounded-lg"
              src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
              alt="home-image"
            />
          </div>
        </div>
      </header>

      {/* Promotional Banner */}
      <section className="px-20 mb-8">
        <div className="carousel w-full">
          <div className="carousel-item w-full">
            {/* <img
              src="https://via.placeholder.com/1200x400"
              alt="Promotional Banner"
              className="w-full rounded-lg"
            /> */}
            <Carrousel/>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="px-20 mb-8">
        <h2 className="text-2xl font-bold mb-4">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Electronics</h3>
              <p>Shop the latest gadgets</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Fashion</h3>
              <p>Trendy clothes and accessories</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Home & Kitchen</h3>
              <p>Upgrade your living space</p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="px-20 mb-8">
        <h2 className="text-2xl font-bold mb-4">Best Sellers</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((product) => (
            <div key={product} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Product {product}</h3>
                <p>$99.99</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2 */}
      {/* <section className="px-20 my-32">
        <div className="w-full h-32 bg-slate-200 dark:bg-slate-800 flex items-center justify-center rounded-lg">
          <h1 className="text-2xl font-bold">This is Section 2</h1>
        </div>
      </section> */}

      {/* Carousel Section */}
      {/* <section className="px-20 mb-8"> */}
        {/* Replace with your Carousel component */}
        {/* <div className="w-full h-64 bg-slate-300 dark:bg-slate-700 flex items-center justify-center rounded-lg">
          <h1 className="text-2xl font-bold">Carousel Section</h1>
        </div>
      </section> */}

      {/* Footer */}
      {/* <footer className="bg-base-200 p-4 text-center">
        <p>© 2023 Ecommerce App. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="/help" className="link">
            Help
          </a>
          <a href="/about" className="link">
            About
          </a>
          <a href="/terms" className="link">
            Terms
          </a>
        </div>
      </footer> */}
    </div>
  );
};