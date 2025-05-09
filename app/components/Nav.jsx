"use client";
import React from "react";
import Link from "next/link";
import "../styles/nav.scss";

function Nav() {
  return (
    <nav>
      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/user">User</Link>
        </li>
        <li>
          <Link href="/rateUsPage">Rate Us</Link>
        </li>
        <li>
          <Link href="/useEffect">useEffect</Link>
        </li>
        <li>
          <Link href="/counter">Counter</Link>
        </li>
        <li>
          <Link href="/childpage">Child Page</Link>
        </li>
        <li>
          <Link href="/apipage">Essen Api</Link>
        </li>
        <li>
          <Link href="/product">Model Toy</Link>
        </li>
        <li>
          <Link href="/kleidung">Kleidung Api</Link>
        </li>
        <li>
          <Link href="/autoapi">Cars Api</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
