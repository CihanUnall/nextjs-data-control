"use client";

import React, { useEffect, useState } from "react";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.slice(0, 20)); // İlk 20 ürünü al
        setLoading(false);
      })
      .catch((err) => {
        console.error("Veri alınamadı:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Yükleniyor...</p>;

  return (
    <div style={styles.container}>
      <h1>Ürünler</h1>
      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <img
              src={product.images[0]}
              alt={product.title}
              style={styles.image}
            />
            <h2>{product.title}</h2>
            <p>{product.price} $</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "1rem",
    marginTop: "1rem",
  },
  card: {
    padding: "1rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "4px",
  },
};

export default ProductsPage;
