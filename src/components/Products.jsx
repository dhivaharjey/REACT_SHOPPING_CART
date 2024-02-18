import React, { useState } from "react";
import "./style/Product.css";
function Products({ item, index, setCartCount }) {
  const [status, setStatus] = useState(true);

  const addCart = () => {
    setStatus(false);
    setCartCount((val) => val + 1);
  };
  const removeCart = () => {
    setStatus(true);
    setCartCount((val) => val - 1);
  };
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 mb-5 d-flex align-items-stretch">
      <div className="card mb-5">
        {/* <!-- Product image--> */}
        <img
          className="card-img-top object-fit-cover border rounded"
          src={item.image}
          alt="product image"
        />
        {/* <!-- Product details--> */}
        <div className="card-body d-flex flex-column">
          <div className="text-center">
            {/* <!-- Product name--> */}
            <h5 className="fw-bolder">{item.productName}</h5>

            {/* <!-- Product price--> */}
            <div class="text-dark fs-5 text-decoration-line-through">
              {item.oldPrice}
            </div>
            <span className="text-success fs-6 fw-bolder  fst-italic">
              {item.offers}
            </span>
            <div class="text-dark fs-4 badge bg-normal text-wrap mb-4">
              &#8377;{item.price}
            </div>

            {/* Description */}
            <div class="text-dark ">
              <h6 className="text-left font-monospace text-wrap ">Details:</h6>
              <p className="font-monospace fst-italic text-wrap">
                {item.details}
              </p>
            </div>
          </div>
        </div>
        {/* <!-- Product actions--> */}
        <div className="card-footer p-4  pt-0 border-top-0 bg-transparent">
          <div className="text-center " key={index}>
            {status ? (
              <button className="btn btn-outline-primary " onClick={addCart}>
                Add to cart
              </button>
            ) : (
              <button className="btn btn-outline-danger " onClick={removeCart}>
                Remove from cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
