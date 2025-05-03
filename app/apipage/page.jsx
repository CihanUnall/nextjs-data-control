"use client";
import "../styles/apipage.scss";
import { useEffect, useState } from "react";

export default function PizzaList() {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPizzas() {
      try {
        const res = await fetch(
          "https://free-food-menus-api-two.vercel.app/drinks"
        );
        const data = await res.json();
        setPizzas(data);
      } catch (error) {
        console.error("Veri alınamadı:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPizzas();
  }, []);

  if (loading) return <p>Yükleniyor...</p>;

  return (
    <div className="pizza-list">
      {pizzas.map((pizza) => (
        <div
          key={pizza.id}
          style={{
            border: "1px solid #ddd",
            padding: "1rem",
            borderRadius: "8px",
          }}
        >
          <p>
            {pizza.img ? (
              <img
                src={pizza.img}
                alt={pizza.name}
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
            ) : (
              <p>Resim yok</p>
            )}
          </p>
          <h2>{pizza.name}</h2>
          <p>{pizza.description || "Açıklama yok."}</p>
          <p>
            <strong>Fiyat:</strong> {pizza.price || "Bilinmiyor"}₺
          </p>
          <p>
            <strong>Boyut:</strong> {pizza.size || "Standart"}
          </p>
        </div>
      ))}
    </div>
  );
}
