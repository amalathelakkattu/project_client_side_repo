import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="footer bg-base-200 text-base-content p-10">
            <nav>
                <h6 className="footer-title">Get to Know Us</h6>
                <a className="link link-hover">About</a>
                <a className="link link-hover">Careers</a>
                <a className="link link-hover">Press Releases</a>
                <a className="link link-hover">Contact Us</a>
            </nav>
            <nav>
                <h6 className="footer-title">Make Money with Us</h6>
                <a className="link link-hover">Sell Product</a>
                <a className="link link-hover">Protect and Build Your Brand</a>
                <a className="link link-hover">Become an Affiliate</a>
                <a className="link link-hover">Advertise Your Products</a>
            </nav>
            <nav>
                <h6 className="footer-title">Let Us Help You</h6>
                <a className="link link-hover">Your Account</a>
                <a className="link link-hover">Returns Centre</a>
                <a className="link link-hover">Recalls and Product Safety Alerts</a>
                <a className="link link-hover">100% Purchase Protection</a>
                <a className="link link-hover">Help</a>
                <Link className="link link-hover" to={'/seller/login'}>Login as Seller</Link>
            </nav>
            {/* <form>
                <h6 className="footer-title">Newsletter</h6>
                <fieldset className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="join">
                        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                        <button className="btn btn-primary join-item">Subscribe</button>
                    </div>
                </fieldset>
            </form> */}
        </footer>
    );
};