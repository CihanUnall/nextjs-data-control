"use client";
import React from "react";
import Link from "next/link";
import "../styles/child-nav.scss";

function ChildNav() {
  return (
    <div className="child-nav">
      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li>
          <Link href="/childpage/one">One</Link>
        </li>
        <li>
          <Link href="/childpage/two">Two</Link>
        </li>
        <li>
          <Link href="/childpage/three">Three</Link>
        </li>
      </ul>
    </div>
  );
}

export default ChildNav;
