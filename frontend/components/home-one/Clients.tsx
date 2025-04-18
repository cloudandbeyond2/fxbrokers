"use client";
import React from "react";
import client1 from "@/public/images/client-1.png";
import Image from "next/image";

const Clients = () => {
  return (
    <section className="clients pt-120 pb-120 position-relative">
      <div className="container content">
        <div className="row gy-4">
          <div data-aos="fade-in" className="col-lg-5 col-xl-6 col-xxl-5">
            <h2 className="display-4 text-white fw-semibold mb-3 mb-xl-4">
              Hear What Our <span className="text-secondary">Clients</span> Have to Say
            </h2>
            <p className="l-text text-white mb-40">
              Welcome to our testimonials section, where you can discover what our satisfied clients have to say...
            </p>
            <div className="d-flex align-items-center stat">
              <h2 className="text-white display-4 fw-semibold pe-4">
                2.7<span className="text-secondary">K</span>
              </h2>
              <p className="s-text text-white ps-4">Here are some testimonials from our valued clients</p>
            </div>
          </div>

          <div data-aos="fade-in" className="col-lg-7 col-xl-6 offset-xxl-1">
              <div className="client-card p-4 bg-white rounded-4 shadow-sm">
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
                  <strong>4.448</strong> • 174 REVIEWS <br />
                  <span className="text-secondary">Updated: Mar 19, 2025 • IG.com</span>
                </p>

                {/* Testimonial Content */}
                <p className="mb-3 text-muted">
                  “IG is a forex broker. IG offers the WebTrader and MT4 trading currency platforms. IG.com offer over 100 forex currency pairs, cfds, commodities, stocks, index, gold, silver, oil, bitcoin and other cryptocurrencies for your personal investment and trading options.”
                </p>

               
              </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Clients;
