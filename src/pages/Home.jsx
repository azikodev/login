import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ProductsList from "../components/ProductsList";
import Navbar from "../components/Navbar";
import { useCollection } from "../hooks/useCollection";
function Home() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((data) => data.json())
      .then((products) => setProducts(products))
      .catch((error) => console.log(error));
  }, []);
  const { user } = useSelector((state) => state.user);
  const { data } = useCollection("todos", ["uid", "==", user.uid]);
  console.log(data);
  return <div> {products && <ProductsList products={products} />}</div>;
}

export default Home;
