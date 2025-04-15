"use client";
import Breadcrumb from "@/components/Breadcrumb";
import MasterLayout from "@/masterLayout/MasterLayout";
import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";



const Page = () => {
  const [showAlert, setShowAlert] = useState(false);

  const brokerList = [
    "AffluenceFX",
    "AmeritForexTrade",
    "Astrofxoptions",
    "BitForexTrade",
    "CoingateForexPro",
    "EasyFxExchange",
    "Fastforextradelab",
    "Fastsecurefx",
    "Forex Capital Gain",
    "Forex Trade Platform",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000); // Hide after 3 seconds
  };

  return (
    <>
      <MasterLayout>
        <Breadcrumb title="Input Layout" />
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">Add a Scam Brokers</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row gy-3">
                  <div className="col-12">
                    <label className="form-label">Select Brokers</label>
                    <select name="brokers" className="form-control w-100" required>
                      <option value="">Select Broker Type</option>
                      {brokerList.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-12">
                    <label className="form-label">Review</label>
                    <textarea
                      name="review"
                      className="form-control"
                      rows="4"
                      placeholder="Enter a description..."
                    ></textarea>
                  </div>
                  <div className="col-12">
  <label className="form-label">Date</label>
  <input
    type="date"
    name="date"
    className="form-control"
    defaultValue={new Date().toISOString().split("T")[0]}
    required
  />
</div>

               

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary-600">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {showAlert && (
          <div className="custom-alert">
            <div
              className="alert alert-success bg-success-600 text-white border-success-600 fw-semibold d-flex align-items-center justify-content-between"
              role="alert"
            >
              Review submitted successfully!
              <button
                className="remove-button text-white"
                onClick={() => setShowAlert(false)}
              >
                <Icon icon="iconamoon:sign-times-light" className="icon" />
              </button>
            </div>
          </div>
        )}

        {/* Style for bottom-right alert */}
        <style jsx>{`
          .custom-alert {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 9999;
            width: 350px;
          }

          .remove-button {
            background: transparent;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
          }

          .icon {
            pointer-events: none;
          }
        `}</style>
      </MasterLayout>
    </>
  );
};

export default Page;
