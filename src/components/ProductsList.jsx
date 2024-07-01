import React from "react";
import Products from "./Products";

function ProductsList({ products }) {
  if (!products || !products.products) {
    return <div>No products available</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {products.products.map((product) => {
        const { title, id, description, thumbnail } = product;
        return (
          <div key={id}>
            <Products
              title={title.slice(0, 25)}
              description={description.slice(0, 130)}
              id={id}
              thumbnail={thumbnail}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ProductsList;
