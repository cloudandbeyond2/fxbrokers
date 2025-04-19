'use client';
import React, { useState } from "react";
import Image from "next/image";

const userReviews = [
  {
    name: "Or Benezra",
    location: "Tel Aviv, Israel",
    date: "Apr 26, 2022",
    stars: 5,
    title: "Great App",
    usage: "Other",
    duration: "0-3 Months",
    review:
      "Love the app, It helped me invest my money and I am super pleased with the feel and functionality",
    helpful: 1,
    avatar:
      "https://ui-avatars.com/api/?name=Or+Benezra&background=0D8ABC&color=fff",
    reply: "Thank you for the kind feedback! We're glad you're enjoying the platform.",
  },
  {
    name: "Josephmcconico",
    location: "Chicago, USA",
    date: "Apr 14, 2022",
    stars: 1,
    title: "30+ Pip Spreads",
    usage: "Live",
    duration: "0-3 Months",
    review:
      "Sure they offered a free $250, but then on my second day of trading I see a great trade, and I am a scalper btw. I'm about to place my trade and I see the spread is at $30. So I have to make 30 pips up before I am even profitable. Worst experience ever.\n\nIf you have any sense, please do not use this broker, waste of money and time.",
    helpful: 2,
    avatar:
      "https://ui-avatars.com/api/?name=Josephmcconico&background=FF5733&color=fff",
    reply: "", // No reply yet
  },
];

const RecentUserReview = () => {
  const [visibleReplies, setVisibleReplies] = useState<Record<number, boolean>>({});

  const toggleReply = (index) => {
    setVisibleReplies((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="row g-4">
          <div className="col-12">
            {userReviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-0 rounded-4 shadow-sm mb-4 d-flex flex-lg-row flex-column"
              >
                {/* Left Column */}
                <div
                  className="d-flex flex-column text-center text-lg-start p-3"
                  style={{
                    minWidth: 200,
                    backgroundColor: "#f1f1f1",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={80}
                    height={80}
                    className="rounded-circle mb-3"
                  />
                  <div>
                    <p className="fw-semibold mb-1">{review.name}</p>
                    <small className="text-muted">{review.location}</small>
                    <br />
                    <small className="text-muted">{review.date}</small>
                    <br />
                    <small className="text-muted">Registered user</small>
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex-grow-1 p-4">
                  <h5 className="fw-bold mb-2">{review.title}</h5>
                  <div className="d-flex flex-wrap gap-2 mb-2">
                    <span className="badge bg-light text-dark">
                      Service use: {review.usage}
                    </span>
                    <span className="badge bg-light text-dark">
                      Length of use: {review.duration}
                    </span>
                  </div>

                  <div className="mb-2">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`ph ${
                          i < review.stars
                            ? "ph-star-fill text-warning"
                            : "ph-star text-secondary"
                        }`}
                      ></i>
                    ))}
                  </div>

                  <p className="text-muted" style={{ whiteSpace: "pre-line" }}>
                    {review.review}
                  </p>

                  <div className="d-flex align-items-center gap-2 text-success mb-3">
                    <i className="ph ph-thumbs-up"></i>
                    <small>
                      {review.helpful} trader
                      {review.helpful > 1 ? "s have" : " has"} found this review
                      helpful
                    </small>
                  </div>

                  {/* Toggle Button */}
                  <button
                    className="btn btn-outline-success rounded-3 px-3 py-1 mb-3"
                    onClick={() => toggleReply(index)}
                  >
                    {visibleReplies[index]
                      ? "Hide IG Representative Answer"
                      : "Show IG Representative Answer"}
                  </button>

                  {/* Conditionally Render Reply */}
                  {visibleReplies[index] && (
                    <>
                      {review.reply ? (
                        <div className="card border-success">
                          <div className="card-header bg-success text-white">
                            IG Representative Response
                          </div>
                          <div className="card-body">
                            <p className="card-text text-muted mb-0">
                              {review.reply}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="alert alert-warning mb-0">
                          IG has not responded to this review yet.
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentUserReview;
