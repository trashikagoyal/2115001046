import React, { useEffect, useState } from "react";
import Filters from "./Filters";
import Sorting from "./Sorting";
import ProductLists from "./ProductLists";
import Pagination from "./Pagination";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);
  const [filter, setFilters] = useState({});
  const [sorting, setSorting] = useState("");
  const [pages, setPages] = useState(1);
  const [totPages, setTotPages] = useState(1);

  // Placeholder for the actual token. In practice, retrieve this securely.
  const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIwNzc5NDA2LCJpYXQiOjE3MjA3NzkxMDYsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjJjYTNiOGRiLTE2MzAtNDQ0Yi05OTQ5LWEzN2NkYjU3MzA2YyIsInN1YiI6InRyYXNoaWthLmdveWFsX2NzMjFAZ2xhLmFjLmluIn0sImNvbXBhbnlOYW1lIjoiR0xBIFVuaXZlcnNpdHkiLCJjbGllbnRJRCI6IjJjYTNiOGRiLTE2MzAtNDQ0Yi05OTQ5LWEzN2NkYjU3MzA2YyIsImNsaWVudFNlY3JldCI6InNvRXJEZWlZYURDalhxbXAiLCJvd25lck5hbWUiOiJUcmFzaGlrYSBHb3lhbCIsIm93bmVyRW1haWwiOiJ0cmFzaGlrYS5nb3lhbF9jczIxQGdsYS5hYy5pbiIsInJvbGxObyI6IjIxMTUwMDEwNDYifQ.eiahFe9DX7dLWbVgyKd5FbMC_oU6_MQQM2hI6scNpC4"
    
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "http://20.244.56.144/test/companies/AMZ/categories/Laptop/products",
          {
            params: {
              top: 10,
              minPrice: filter.minPrice,
              maxPrice: filter.maxPrice,
              sort: sorting, // Assuming sorting is directly passed to the API
            },
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProducts(res.data);
        setTotPages(Math.ceil(res.data.length / 10));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [sorting, filter, pages]);

  return (
    <>
      <h1>All Products</h1>
      <Filters setFilters={setFilters} />
      <Sorting setSorting={setSorting} />
      <ProductLists products={products} />
      <Pagination pages={pages} setPages={setPages} totPages={totPages} />
    </>
  );
}

export default Home;
