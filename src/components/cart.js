import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../features/reducer/cart-slice";
const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const handleRemoveToCart = (id) => {
    dispatch(remove(id));
  };
  
  return (
    <>
      <h1>Our Cart Collection Products</h1>
      {cart.length ? (
        <div className="row">
          {cart.map((product, index) => {
            return (
              <div className="mb-4" key={index}>
                <div className="card">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <img
                          src={product.image}
                          className="img-fluid mx-auto mb-2"
                          alt="..."
                          style={{ height: "200px" }}
                        />
                      </div>
                      <div className="col-7">
                        <h5 className="card-title mb-2 ">{product.title}</h5>
                        <h5 className="text-primary fw-bolder">
                          ${product.price}
                        </h5>
                        <p className="card-text  mb-2">{product.description}</p>
                      </div>
                      <div className="col-2">
                        <h6 className="text-warning">
                          Rating :{product.rating.rate} ({product.rating.count})
                        </h6>
                        <button
                          onClick={() => handleRemoveToCart(product.id)}
                          className="btn btn-primary d-block w-100"
                        >
                          Remove from cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p>No items are added to the cart</p>
      )}
    </>
  );
};

export default Cart;
