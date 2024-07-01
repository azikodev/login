import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products({ id, title, description, thumbnail }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products/" + id)
      .then((data) => data.json())
      .then((product) => setProduct(product))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <Link to={`/singleProduct/${id}`} key={id}>
      <div className="flex flex-col items-center gap-[20px] border-[1px] max-w-[320px] max-h-[320px] min-h-[320px] rounded-[15px] py-[15px] px-[10px] shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out hover:scale-105 transform">
        <img src={thumbnail} alt={description} className="w-[140px] rounded-lg" />
        <div className="card-body text-center">
          <h2 className="text-[18px] font-[500]">{title}</h2>
          <p className="text-[14px] text-gray-700">{description.slice(0, 50)}...</p>
        </div>
      </div>
    </Link>
  );
}

export default Products;
