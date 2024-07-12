import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductDetails from "./ProductDetails";
function Product() {
  const { id } = useParams();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(
        `http://20.244.56.144/test/companies/AMZ/categories/Laptop/products`
      );
      const productDetails = res.data.find((p) => p.productName === id); // Adjust based on unique identifier
      setProducts(productDetails);
    };

    fetchProducts();
  }, [id]);

  if (!products) return <div>Product Not Found</div>;

  return (
    <div>
       
      <ProductDetails products={products} />
    </div>
  );
}
export default Product;
