import React from "react";

const Nav = () => {
  return (
    <div>
      <li>
        <a className="text-dark d-flex align-items-center">Pages</a>
        <div className="mega-menu">
          <div className="mega-menu-container">
            <div className="single-menu">
              <span>Home Page</span>
              <ul>
                <li>Women Special</li>
                <li>Smart Boys</li>
                <li>Cute Babies</li>
                <li>Combo Offer</li>
                <li>Suggested Product</li>
              </ul>
            </div>
            <div className="single-menu">
              <span>Contact Page</span>
              <ul>
                <li>Contact Number</li>
                <li>Email Address</li>
                <li>Locations</li>
              </ul>
            </div>
            <div className="single-menu">
              <span>Profile Page</span>
              <ul>
                <li>User Information</li>
                <li>Dashboard</li>
                <li>View Order</li>
                <li>View Wished Product</li>
              </ul>
            </div>
            <div className="single-menu">
              <span>All Product Page</span>
              <ul>
                <li>Most views</li>
                <li>Best Sale</li>
                <li>Combo Offer</li>
                <li>Admin Suggestion</li>
              </ul>
            </div>
            <div className="single-menu">
              <span>Shop Page</span>
              <ul>
                <li>Our shops</li>
                <li>Search by Names</li>
                <li>Agency Number</li>
                <li>Contact Manager</li>
              </ul>
            </div>
            <div className="single-menu">
              <span>Wishlist Page</span>
              <ul>
                <li>My wished product</li>
                <li>Add More Product</li>
                <li>Order from here</li>
                <li>Remove Product</li>
              </ul>
            </div>
            <div className="single-menu">
              <span>Cart Page</span>
              <ul>
                <li>Cart product</li>
                <li>Add More Product</li>
                <li>Order from here</li>
                <li>Remove Product</li>
              </ul>
            </div>
            <div className="single-menu">
              <span>Order Page</span>
              <ul>
                <li>Ordered product</li>
                <li>Add More Product</li>
                <li>Order from here</li>
                <li>Cancel Order</li>
              </ul>
            </div>
            <div className="single-menu">
              <span>Login Page</span>
              <ul>
                <li>Login</li>
                <li>Registration</li>
                <li>Reset Password</li>
                <li>Create New Account</li>
              </ul>
            </div>
            <div className="single-menu">
              <span>Blog Page</span>
              <ul>
                <li>Add a Post</li>
                <li>Remove Post</li>
                <li>Visitors</li>
                <li>Like,Comment & Share</li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default Nav;
