"use client";

import { useState, useEffect } from "react";
import "../styles/rateus.css";

export default function RateUsPage() {
  const [like, setLike] = useState(null);
  const [heart, setHeart] = useState(null);
  const [smile, setSmile] = useState(null);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const maxLength = 600;

  // Sayfa client'ta mı çalışıyor kontrolü
  useEffect(() => {
    setIsClient(true);
  }, []);

  // LocalStorage'dan veri çek (sadece client'ta)
  useEffect(() => {
    if (isClient) {
      setLike(parseInt(localStorage.getItem("like") || "20070630"));
      setHeart(parseInt(localStorage.getItem("heart") || "1009020"));
      setSmile(parseInt(localStorage.getItem("smile") || "1080105"));

      const storedComments = localStorage.getItem("comments");
      if (storedComments) setComments(JSON.parse(storedComments));
    }
  }, [isClient]);

  // LocalStorage'a kaydet (değer null değilse)
  useEffect(() => {
    if (like !== null) localStorage.setItem("like", like.toString());
  }, [like]);

  useEffect(() => {
    if (heart !== null) localStorage.setItem("heart", heart.toString());
  }, [heart]);

  useEffect(() => {
    if (smile !== null) localStorage.setItem("smile", smile.toString());
  }, [smile]);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleSubmit = () => {
    if (comment.trim() !== "" && rating > 0) {
      const newComment = { text: comment, rating };
      setComments([...comments, newComment]);
      setComment("");
      setRating(0);
    } else {
      alert("Please write a comment and select a star rating.");
    }
  };

  const handleCommentChange = (e) => {
    const value = e.target.value;
    if (value.length > maxLength) {
      alert("You have reached the maximum 600 character limit!");
      return;
    }
    setComment(value);
  };

  if (!isClient || like === null || heart === null || smile === null) {
    return <p>Loading...</p>; // SSR sırasında çalışmasın
  }
  return (
    <div className="like-page">
      <div className="like-info">
        <p>
          <strong>How did you find this page?</strong>
        </p>
        <p>
          You can leave a comment, give a star rating, and support us with a
          like. 🌟
        </p>
        <p>We truly value your feedback—it helps us grow and improve!</p>
        <hr />
        <p>
          <strong>Your opinion matters to us!</strong>
        </p>
        <p>
          Rate this page: leave stars ⭐, comments 💬, and show some love with a
          like 👍
        </p>
        <p>Thank you for supporting us! 💛</p>
        <hr />
        <p>
          <strong>🎯 How much do you like this page?</strong>
        </p>
        <p>Rate us with stars ⭐⭐⭐⭐⭐</p>
        <p>Leave your comments 💬</p>
        <p>And don’t forget to hit the like button! 👍</p>
        <hr />
      </div>

      {/* Comment Section */}
      <div className="like-page-comment">
        <label htmlFor="comment">
          <i className="fa-solid fa-comments"></i> Comments:
        </label>

        {/* Star Rating */}
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              style={{
                fontSize: "24px",
                color: star <= rating ? "gold" : "gray",
                cursor: "pointer",
              }}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>

        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Enter your comment"
          rows={10}
        />

        <button onClick={handleSubmit}>Submit</button>
      </div>

      {/* Like Buttons */}
      <div className="like-container">
        <div className="like-page1">
          <h2>Total Likes</h2>
          <input type="text" value={like} readOnly />
          <button onClick={() => setLike(like + 1)}>
            <i className="fa-solid fa-thumbs-up"></i>
          </button>
        </div>
        <div className="like-page1">
          <h2>Total Hearts</h2>
          <input type="text" value={heart} readOnly />
          <button onClick={() => setHeart(heart + 1)}>
            <i className="fa-solid fa-heart"></i>
          </button>
        </div>
        <div className="like-page1">
          <h2>Total Smiles</h2>
          <input type="text" value={smile} readOnly />
          <button onClick={() => setSmile(smile + 1)}>
            <i className="fa-solid fa-face-kiss-wink-heart"></i>
          </button>
        </div>
      </div>

      {/* Comments List */}
      <div className="commentary">
        <ul>
          <h2>All Comments</h2>
          <hr />
          {comments.map((c, index) => (
            <li key={index}>
              <p>{"⭐".repeat(c.rating)}</p>
              <p>{c.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
