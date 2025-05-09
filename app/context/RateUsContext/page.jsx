// context/RateUsContext.js
"use client";

import { createContext, useState, useEffect } from "react";

export const RateUsContext = createContext();

export const RateUsProvider = ({ children }) => {
  const [like, setLike] = useState(20070630);
  const [heart, setHeart] = useState(1009020);
  const [smile, setSmile] = useState(1080105);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const storedLike = localStorage.getItem("like");
    const storedHeart = localStorage.getItem("heart");
    const storedSmile = localStorage.getItem("smile");
    const storedComments = localStorage.getItem("comments");

    if (storedLike) setLike(Number(storedLike));
    if (storedHeart) setHeart(Number(storedHeart));
    if (storedSmile) setSmile(Number(storedSmile));
    if (storedComments) setComments(JSON.parse(storedComments));
  }, []);

  useEffect(() => {
    localStorage.setItem("like", like);
  }, [like]);

  useEffect(() => {
    localStorage.setItem("heart", heart);
  }, [heart]);

  useEffect(() => {
    localStorage.setItem("smile", smile);
  }, [smile]);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const addComment = (comment) => {
    setComments((prev) => [...prev, comment]);
  };

  return (
    <RateUsContext.Provider
      value={{
        like,
        setLike,
        heart,
        setHeart,
        smile,
        setSmile,
        comments,
        addComment,
      }}
    >
      {children}
    </RateUsContext.Provider>
  );
};
