"use client";

import { useState, useEffect } from "react";
import "../styles/rateus.css";

export default function RateUsPage() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const maxLength = 600;

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("comments", JSON.stringify(comments));
    }
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
