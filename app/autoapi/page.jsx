"use client";

import React, { useEffect, useState } from "react";

const CarsPage = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://myfakeapi.com/api/cars/")
      .then((res) => res.json())
      .then((data) => {
        setCars(data.cars); // API içinde cars array'i var
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
      <h1>Arabalar</h1>
      <div style={styles.grid}>
        {cars.map((car) => (
          <div key={car.id} style={styles.card}>
            <img
              src={`/Randy.png`}
              alt={"randy"}
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
            <h2>
              {car.car} - {car.car_model}
            </h2>
            <p>Yıl: {car.car_model_year}</p>
            <p>Renk: {car.car_color}</p>
            <p>Fiyat: {car.price}</p>
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
    backgroundColor: "#f9f9f9",
    textAlign: "left",
  },
};

export default CarsPage;
