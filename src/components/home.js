import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { productApi } from "../features/reducer/product-slice";
import { STATUSES } from "../features/reducer/product-slice";
import { add } from "../features/reducer/cart-slice";
import {useNavigate} from "react-router-dom"


const Home = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productApi());
  }, []);

  const { products, status } = useSelector((state) => state.product);

const handleAddToCart=(product)=>{
     dispatch(add(product))
     navigate("/cart")  
}



  if (status === STATUSES.PENDING) {
    return (
      <>
        <h1>Loading ....</h1>
      </>
    );
  }
  if (status === STATUSES.ERROR) {
    return (
      <>
        <h1 className="text-danger">Somethind went wrong</h1>
      </>
    );
  } else {
    return (
      <>
        <h1>Our Famous Products</h1>
        <div className="row">
          {products.map((product, index) => {
           return <div className="col-md-3 mb-4" key={index}>
              <div className="card">
                <div className="card-body">
                <img src={product.image} className="img-fluid mx-auto mb-2" alt="..." style={{height:"200px"}} />
                  <h5 className="card-title mb-2 text-overflow-2">{product.title}</h5>
                  <h5 className="text-primary fw-bolder">${product.price}</h5>
                  <p className="card-text text-overflow-2 mb-2">
                   {product.description}
                  </p>
                  <h6 className="text-warning">
                     Rating :{
                     product.rating.rate
                    } ({product.rating.count})
                  </h6>
                  <button onClick={()=>handleAddToCart(product)} className="btn btn-primary d-block w-100">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>;
          })}
        </div>
      </>
    );
  }
};

export default Home;
