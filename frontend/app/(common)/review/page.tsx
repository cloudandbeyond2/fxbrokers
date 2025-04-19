import React from "react";
import BrokerDetails from "@/components/review/BrokerDetails";
import RecentUserReview from "@/components/review/RecentUserReview";
import QuestionsAnswer from "@/components/review/QuestionsAnswer";
import SimiliarBrokers from "@/components/review/SimiliarBrokers";

// Directly inlined Clients component
const Clients = () => {
  return (
    <section className="clients pt-120 pb-120 position-relative">
      <div className="container content">
        <div className="row gy-4 justify-content-center">
          {/* Left: Testimonial Card */}
          <div data-aos="fade-in" className="col-12 col-lg-8 col-xl-8">
            <div className="client-card p-4 bg-white rounded-4 shadow-sm h-100">
              {/* Heading */}
              <h3 className="fw-semibold mb-3">IG Review</h3>

              {/* Ratings */}
              <div className="d-flex gap-1 text-warning fs-5 mb-2">
                <i className="ph ph-star-fill" />
                <i className="ph ph-star-fill" />
                <i className="ph ph-star-fill" />
                <i className="ph ph-star-fill" />
                <i className="ph ph-star-half-fill" />
              </div>

              {/* Meta Info Line */}
              <p className="text-muted small mb-3">
                <strong>4.458</strong> • 174 REVIEWS <br />
                <span className="text-secondary">Updated: Mar 19, 2025 • IG.com</span>
              </p>

              {/* Testimonial Paragraph */}
              <p className="mb-3 text-muted">
                “IG is a forex broker. IG offers the WebTrader and MT4 trading currency platforms. IG.com offer over 100 forex
                currency pairs, cfds, commodities, stocks, index, gold, silver, oil, bitcoin and other cryptocurrencies for your
                personal investment and trading options.”
              </p>

              {/* Badges */}
              <div className="d-flex flex-wrap gap-2 mb-4">
                {[
                  "Forex Brokers",
                  "Crypto",
                  "Stocks",
                  "CFD - Contract for Difference",
                  "MetaTrader 4",
                ].map((badge, index) => (
                  <span key={index} className="badge bg-secondary-subtle text-dark fw-medium px-3 py-2 rounded-pill">
                    {badge}
                  </span>
                ))}
              </div>

              {/* Info Box */}
              <div className="p-3 mt-4 rounded-3" style={{ backgroundColor: "#f1f3f5", color: "#2f3e46" }}>
                <small className="fw-medium">
                  Was at <strong>IGMarkets.com</strong>. Other websites of this company include{" "}
                  <strong>IGForex.com</strong>, <strong>IGIndex.co.uk</strong>.
                </small>
              </div>
            </div>
          </div>

          {/* Right: Side Card */}
          <div className="col-12 col-lg-3 col-xl-3">
            <div className="h-100 d-flex flex-column justify-content-start">
              <button
                type="button"
                className="btn btn-lg d-block w-100 mb-3 text-dark border-0"
                style={{ backgroundColor: "#fdad00" }}
              >
                Add your review
              </button>

              <div className="list-group mb-3">
                <a href="#broker-details" className="list-group-item list-group-item-action">
                  🔎 Broker details
                </a>
                <a href="#recent-user-reviews" className="list-group-item list-group-item-action">
                  ⭐ Recent User Reviews
                </a>
                <a href="#frequently-asked-questions" className="list-group-item list-group-item-action">
                  ❓ Questions &amp; Answers
                </a>
                <a href="#similar-brokers" className="list-group-item list-group-item-action">
                  🪧 Similar Brokers
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomeTwo = () => {
  return (
<>
  <Clients />

  <div id="broker-details">
    <BrokerDetails />
  </div>

  <div id="recent-user-reviews">
    <RecentUserReview />
  </div>

  <div id="frequently-asked-questions">
    <QuestionsAnswer />
  </div>

  <div id="similar-brokers">
    <SimiliarBrokers />
  </div>
</>

  );
};

export default HomeTwo;
