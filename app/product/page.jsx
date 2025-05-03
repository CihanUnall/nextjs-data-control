"use client";
import React from "react";
import "../styles/product.scss";

function page() {
  return (
    <div className="product-list">
      <ul>
        <li>
          <img src="/Cartoon-Actionfigur.png" alt="" />
          <h2>Designer Cihan's Model </h2>
          <p>Preis : 1000 €</p>
        </li>
        <li>
          <img src="/Randy.png" alt="" />
          <h2>Designer Randy's Model </h2>
          <p>Preis : 1000 €</p>
        </li>
        <li>
          <img src="/Cartoon-Sammlerfigur.png" alt="" />
          <h2>Designer Kushtrim's Model </h2>
          <p>Preis : 1000 €</p>
        </li>
      </ul>
    </div>
  );
}

export default page;
