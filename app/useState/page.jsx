"use client";

import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import "../styles/rateus.css";

export default function RateUsPage() {
  const [like, setLike] = useLocalStorage("like", 20070630);
  const [heart, setHeart] = useLocalStorage("heart", 1009020);
  const [smile, setSmile] = useLocalStorage("smile", 1080105);
  const [comments, setComments] = useLocalStorage("comments", []);

  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const maxLength = 600;

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

  if (like === null || heart === null || smile === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="like-page">
      <div className="like-info">
        {/* Info Text */}
        <p>
          <strong>How did you find this page?</strong>
        </p>
        <p>
          You can leave a comment, give a star rating, and support us with a
          like. 🌟
        </p>
        <p>We truly value your feedback—it helps us grow and improve!</p>
        <hr />
      </div>

      {/* Comment Section */}
      <div className="like-page-comment">
        <label htmlFor="comment">
          <i className="fa-solid fa-comments"></i> Comments:
        </label>

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
