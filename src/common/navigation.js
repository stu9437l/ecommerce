import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

const Navigation = () => {

    const count = useSelector(state=>state.cart)

  return (
    <>
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <span className="fs-4">Simple header</span>
        </Link>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/" className="nav-link active">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              Cart
            </Link>
          </li>
        </ul>
        <h5 className="mb-0 text-danger">
            Number of Cart Item: {count.cart.length}
        </h5>
      </header>
    </>
  );
};

export default Navigation;
