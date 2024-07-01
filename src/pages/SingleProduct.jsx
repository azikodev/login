import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function SingleProduct() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products/" + id)
      .then((data) => data.json())
      .then((product) => setProduct(product))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {product && (
        <div
          className="card lg:card-side bg-base-100 shadow-xl"
          key={product.id}
        >
          <figure>
            <img
              src={product.thumbnail}
              alt={product.description}
              className="w-[400px]"
            />
          </figure>
          <div className="card-body flex flex-col items-start justify-start">
            <h2 className="card-title ">{product.title}</h2>
            <p className="info m-0 text-start">{product.description}</p>
          </div>
          <div className="card-actions flex-none items-end ">
            <Link to="/" className="w-[100%]">
              <button className="btn btn-primary w-[100%] ">Back to</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleProduct;
