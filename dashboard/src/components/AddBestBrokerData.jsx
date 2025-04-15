"use client";
import React, { useState } from "react";

const brokers = [
  "Fusion Markets",
  "CMC Markets",
  "Global Prime",
  "Axi",
  "FP Markets",
  "GO Markets",
  "TMGM",
  "FXTRADING.com",
];

const AddBestBrokerData = () => {
  const [selectedBrokers, setSelectedBrokers] = useState([]);

  const toggleBroker = (brokerName) => {
    setSelectedBrokers((prev) =>
      prev.includes(brokerName)
        ? prev.filter((name) => name !== brokerName)
        : [...prev, brokerName]
    );
  };

  return (
    <div className='container'>
      <div className='card'>
        <div className='card-body'>
        <h6 className='mb-4 text-xl pb-5'>Add Best Brokers</h6>

          {/* Broker Checkbox List */}
          <div
            className='broker-grid'
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "16px",
              marginBottom: "32px",
            }}
          >
            {brokers.map((broker) => (
              <div
                key={broker}
                className='broker-item'
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "12px",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
                  cursor: "pointer",
                }}
              >
                <div className='form-check style-check d-flex align-items-center'>
                      <input
                        className='form-check-input radius-4 border border-neutral-400'
                        type='checkbox'
                        name='checkbox'
                        id={3}
                      />
                    </div>

                

                {/* Icon Container 50x50px */}
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "#eee",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='gray'
                    strokeWidth='2'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M5.121 17.804A3 3 0 007 21h10a3 3 0 001.879-3.196M15 11a3 3 0 01-6 0m6 0a3 3 0 00-6 0m6 0V9a3 3 0 00-6 0v2'
                    />
                  </svg>
                </div>

                <span style={{ fontSize: "14px", color: "#333", fontWeight: 500 }}>
                  {broker}
                </span>
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <div style={{ textAlign: "right" }}>
            <button
              type='button'
              style={{
                backgroundColor: "#2563eb",
                color: "white",
                padding: "10px 32px",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
              onClick={() => console.log("Selected Brokers:", selectedBrokers)}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBestBrokerData;
