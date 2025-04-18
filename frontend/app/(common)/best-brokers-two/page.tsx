"use client";
import Image from "next/image";
import React, { useState } from "react";
import heroEl from "@/public/images/hero-el.png";
import OutsideClickHandler from "react-outside-click-handler";
import Link from "next/link";

interface Broker {
  image: string;
  rating: number;
  title: string;
  aosDelay: number;
  popularity: string;
  availableInIndia: boolean;
  updated: string;
}

const brokers: Broker[] = [
  {
    title: "IC Markets",
    image: "/images/investment/investment-1.png",
    rating: 4.8,
    aosDelay: 100,
    popularity: "Very High",
    availableInIndia: true,
    updated: "May 2024"
  },
  {
    title: "Pepperstone",
    image: "/images/investment/investment-2.png",
    rating: 4.7,
    aosDelay: 200,
    popularity: "High",
    availableInIndia: true,
    updated: "April 2024"
  },
  {
    title: "XM Broker",
    image: "/images/investment/investment-3.png",
    rating: 4.5,
    aosDelay: 300,
    popularity: "High",
    availableInIndia: false,
    updated: "March 2024"
  },
  {
    title: "FP Markets",
    image: "/images/investment/investment-4.png",
    rating: 4.6,
    aosDelay: 400,
    popularity: "Medium",
    availableInIndia: true,
    updated: "April 2024"
  },
];

const BestBrokerTwo = () => {
  const [openedPopover, setOpenedPopover] = useState<null | number>(null);
  const [selectedBroker1, setSelectedBroker1] = useState<string>('');
  const [selectedBroker2, setSelectedBroker2] = useState<string>('');
  const [comparison, setComparison] = useState<Broker[]>([]);

  const handleFilterChange1 = (brokerName: string) => {
    setSelectedBroker1(brokerName);
    if (brokerName && selectedBroker2) {
      const broker1 = brokers.find(broker => broker.title === brokerName);
      const broker2 = brokers.find(broker => broker.title === selectedBroker2);
      if (broker1 && broker2) {
        setComparison([broker1, broker2]);
      }
    }
  };

  const handleFilterChange2 = (brokerName: string) => {
    setSelectedBroker2(brokerName);
    if (brokerName && selectedBroker1) {
      const broker1 = brokers.find(broker => broker.title === selectedBroker1);
      const broker2 = brokers.find(broker => broker.title === brokerName);
      if (broker1 && broker2) {
        setComparison([broker1, broker2]);
      }
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-breadcrumb-two overflow-visible">
        <Image className="hero-el one" src={heroEl} alt="" />
        <Image className="hero-el two" src={heroEl} alt="" />
        <Image className="hero-el three" src={heroEl} alt="" />
        <div className="container">
          <div className="row gy-4">
            {/* Hero content here */}
          </div>
        </div>
      </section>

      {/* Best Brokers Comparison Section */}
      <section className="best-broker-two pt-120 pb-120">
        <div className="container">
          {/* Comparison Selectors */}
          <div className="comparison-selectors">
            <div className="selector-group">
              <label className="selector-label">Select first broker:</label>
              <div className="custom-select">
                <select 
                  onChange={(e) => handleFilterChange1(e.target.value)} 
                  value={selectedBroker1}
                >
                  <option value="">Select a broker</option>
                  {brokers.map(broker => (
                    <option key={broker.title} value={broker.title}>{broker.title}</option>
                  ))}
                </select>
                <div className="select-arrow">
                  <svg viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="vs-badge">VS</div>
            
            <div className="selector-group">
              <label className="selector-label">Select second broker:</label>
              <div className="custom-select">
                <select 
                  onChange={(e) => handleFilterChange2(e.target.value)} 
                  value={selectedBroker2}
                >
                  <option value="">Select a broker</option>
                  {brokers.map(broker => (
                    <option key={broker.title} value={broker.title}>{broker.title}</option>
                  ))}
                </select>
                <div className="select-arrow">
                  <svg viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Results */}
          {comparison.length > 0 && (
            <div className="comparison-results">
              <div className="broker-card">
                <div className="broker-rank">1</div>
                <div className="broker-image">
                  <Image 
                    src={comparison[0].image} 
                    alt={comparison[0].title}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="broker-details">
                  <h3>{comparison[0].title}</h3>
                  <div className="broker-stats">
                    <div className="stat-item">
                      <span className="stat-label">Score:</span>
                      <span className="stat-value">{comparison[0].rating}/5</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Popularity:</span>
                      <span className="stat-value">{comparison[0].popularity}</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">India:</span>
                      <span className="stat-value">
                        {comparison[0].availableInIndia ? "Available" : "Not available"}
                      </span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Updated:</span>
                      <span className="stat-value">{comparison[0].updated}</span>
                    </div>
                  </div>
                </div>
                <Link 
                  // href={`/broker-review/${comparison[0].title.toLowerCase().replace(/\s+/g, '-')}`}
                  href={`#`}
                  className="broker-button"
                >
                  <span>View Details</span>
                  {/* <svg viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg> */}
                </Link>
              </div>

              <div className="broker-card">
                <div className="broker-rank">2</div>
                <div className="broker-image">
                  <Image 
                    src={comparison[1].image} 
                    alt={comparison[1].title}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="broker-details">
                  <h3>{comparison[1].title}</h3>
                  <div className="broker-stats">
                    <div className="stat-item">
                      <span className="stat-label">Score:</span>
                      <span className="stat-value">{comparison[1].rating}/5</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Popularity:</span>
                      <span className="stat-value">{comparison[1].popularity}</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">India:</span>
                      <span className="stat-value">
                        {comparison[1].availableInIndia ? "Available" : "Not available"}
                      </span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Updated:</span>
                      <span className="stat-value">{comparison[1].updated}</span>
                    </div>
                  </div>
                </div>
                <Link 
                  // href={`/broker-review/${comparison[1].title.toLowerCase().replace(/\s+/g, '-')}`}
                  href={`#`}
                  className="broker-button"
                >
                  <span>View Details</span>
                  {/* <svg viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg> */}
                </Link>
              </div>
            </div>
          )}

          <style jsx>{`
            /* Base Styles */
            .container {
              max-width: 1200px;
              margin: 0 auto;
              padding: 0 20px;
            }
            
            /* Comparison Selectors */
            .comparison-selectors {
              display: flex;
              flex-direction: column;
              gap: 20px;
              margin-bottom: 40px;
            }
            
            @media (min-width: 768px) {
              .comparison-selectors {
                flex-direction: row;
                align-items: flex-end;
                gap: 30px;
              }
            }
            
            .selector-group {
              flex: 1;
            }
            
            .selector-label {
              display: block;
              margin-bottom: 8px;
              font-weight: 500;
              color: #333;
              font-size: 14px;
            }
            
            .custom-select {
              position: relative;
            }
            
            .custom-select select {
              width: 100%;
              padding: 12px 16px;
              border: 1px solid #ddd;
              border-radius: 8px;
              background-color: white;
              font-size: 16px;
              appearance: none;
              transition: all 0.3s ease;
              box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            }
            
            .custom-select select:focus {
              outline: none;
              border-color: #4a90e2;
              box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
            }
            
            .select-arrow {
              position: absolute;
              top: 50%;
              right: 16px;
              transform: translateY(-50%);
              pointer-events: none;
            }
            
            .select-arrow svg {
              width: 16px;
              height: 16px;
              fill: #666;
            }
            
            .vs-badge {
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 0 10px;
              font-weight: bold;
              color: #666;
            }
            
            @media (min-width: 768px) {
              .vs-badge {
                padding-bottom: 12px;
              }
            }
            
            /* Comparison Results */
            .comparison-results {
              display: grid;
              gap: 20px;
            }
            
            @media (min-width: 768px) {
              .comparison-results {
                grid-template-columns: 1fr 1fr;
              }
            }
            
            .broker-card {
              position: relative;
              display: flex;
              flex-direction: column;
              background: white;
              border-radius: 12px;
              padding: 20px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.08);
              transition: transform 0.3s ease, box-shadow 0.3s ease;
              border: 1px solid #eee;
            }
            
            .broker-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 8px 16px rgba(0,0,0,0.1);
            }
            
            .broker-rank {
              position: absolute;
              top: 20px;
              left: 20px;
              background: #4CAF50;
              color: white;
              width: 30px;
              height: 30px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: bold;
              font-size: 14px;
            }
            
            .broker-image {
              align-self: center;
              margin-bottom: 20px;
            }
            
            .broker-image img {
              border-radius: 50%;
              object-fit: cover;
              border: 3px solid #f0f0f0;
            }
            
            .broker-details {
              margin-bottom: 20px;
            }
            
            .broker-details h3 {
              margin: 0 0 15px 0;
              font-size: 20px;
              color: #222;
              text-align: center;
            }
            
            .broker-stats {
              display: grid;
              grid-template-columns: 1fr;
              gap: 12px;
            }
            
            @media (min-width: 480px) {
              .broker-stats {
                grid-template-columns: 1fr 1fr;
              }
            }
            
            .stat-item {
              display: flex;
              justify-content: space-between;
              padding: 8px 0;
              border-bottom: 1px solid #f0f0f0;
            }
            
            .stat-label {
              color: #666;
              font-size: 14px;
            }
            
            .stat-value {
              font-weight: 500;
              color: #333;
            }
            
            /* Broker Button */
            .broker-button {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              gap: 8px;
              padding: 12px 20px;
              background: linear-gradient(135deg, #4a90e2, #3a7bd5);
              color: white;
              border: none;
              border-radius: 8px;
              font-weight: 500;
              text-decoration: none;
              cursor: pointer;
              transition: all 0.3s ease;
              margin-top: auto;
              align-self: center;
              width: 100%;
              max-width: 200px;
            }
            
            .broker-button:hover {
              background: linear-gradient(135deg, #3a7bd5, #2a6bc7);
              transform: translateY(-2px);
              box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            }
            
            .broker-button svg {
              width: 16px;
              height: 16px;
              fill: white;
            }
          `}</style>
        </div>
      </section>
    </main>
  );
};

export default BestBrokerTwo;