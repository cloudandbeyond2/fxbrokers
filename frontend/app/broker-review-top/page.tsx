"use client";
import React from 'react';
import Image from 'next/image';

const BrokerReviewTop = () => {
  return (
    <div className="banner">
      <div className="contentWrapper">
        <div className="mainContent">
          <div className="leftColumn">
            <div className="header">
              <div className="regulatedBadge">Regulated</div>
              <Image 
                src="https://eimgjys.fxeyee.com/logo/638524966565554499/FXT638524966565554499_113163.png_wiki-template-global" 
                alt="Broker Logo" 
                width={150} 
                height={150} 
                className="brokerLogo"
              />
            </div>
            <div className="scoreSection">
              <div className="scoreLabel">Score</div>
              <div className="scoreValue">9.49 <span className="scoreDivider">/10</span></div>
            </div>
          </div>
          
          <div className="middleColumn">
            <h2 className="companyName">AvaTrade</h2>
            <div className="metaInfo">
              <span className="country">Ireland</span>
              <span className="separator">|</span>
              <span className="years">15-20 years</span>
            </div>
            
            <div className="benchmark">Benchmark <span className="benchmarkValue">AAA</span></div>
            <div className="regulation">Regulated in Australia</div>
            <div className="model">Market Maker (MM)</div>
            
            <div className="link">
              <a href="https://www.avatrade.com?.." className="websiteLink">Website</a>
            </div>
            
            <div className="buttons">
              <button className="primaryButton">Open Account</button>
              <button className="secondaryButton">Time Machine</button>
            </div>
          </div>
          
          <div className="rightColumn">
            <div className="features">
              <div className="featureItem">
                <span className="featureLabel">Benchmark</span>
                <span className="featureValue">AAA</span>
              </div>

              <div className="featureItem">
                <span className="featureLabel">Average transaction speed (ms)</span>
                <span className="featureValue">615</span>
              </div>
              
              <div className="featureItem">
                <span className="featureLabel">MT4/5</span>
                <span className="featureValue">Full License</span>
              </div>
              
              <div className="featureItem">
                <span className="featureLabel">Ava-Demo</span>
                <span className="featureValue">United Kingdom</span>
                <span className="featureValue">MT4</span>
                <span className="featureValue">SE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .banner {
          font-family: Arial, sans-serif;
          max-width: 1400px;
          margin: 0 auto;
          border: 4px solid #fdad00;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          margin-bottom: 40px;
        }

        .contentWrapper {
          padding: 10px;
        }

        .regulatedBadge {
          background-color: #2e7d32;
          color: white;
          padding: 4px 12px;
          font-size: 12px;
          font-weight: bold;
          text-align: center;
          border-radius: 4px;
          margin-bottom: 10px;
          display: inline-block;
        }

        .header {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 15px;
          background-color: #e5e7eb;
        }

        .brokerLogo {
          max-width: 100%;
          height: auto;
          margin-top: 10px;
        }

        .scoreSection {
          display: flex;
          flex-direction: column;
          align-items: center;
          Padding: 15px;
          background-color: #f5f5f5;
          
          margin-top: 10px;
        }

        .scoreLabel {
          font-size: 12px;
          color: #666;
        }

        .scoreValue {
          font-size: 24px;
          font-weight: bold;
          color: #2e7d32;
        }

        .scoreDivider {
          color: #999;
          font-weight: normal;
        }

        .mainContent {
          display: flex;
          flex-direction: column;
          padding: 15px;
        }

        .leftColumn,
        .middleColumn,
        .rightColumn {
          padding: 15px 0;
        }

        .leftColumn {
          border-bottom: 1px solid #e0e0e0;
        }

        .middleColumn {
          border-bottom: 1px solid #e0e0e0;
          margin-top: 15px;
        }

        .companyName {
          margin: 0 0 5px 0;
          font-size: 24px;
          color: #333;
        }

        .metaInfo {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
          font-size: 14px;
          color: #666;
        }

        .separator {
          margin: 0 8px;
          color: #ccc;
        }

        .benchmark {
          margin-bottom: 8px;
          font-size: 14px;
        }

        .benchmarkValue {
          font-weight: bold;
          color: #2e7d32;
        }

        .regulation,
        .model {
          margin-bottom: 8px;
          font-size: 14px;
          color: #333;
        }

        .link {
          margin: 15px 0;
        }

        .websiteLink {
          color: #1976d2;
          text-decoration: none;
          font-size: 14px;
        }

        .buttons {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 20px;
        }

        .primaryButton,
        .secondaryButton {
          padding: 10px 16px;
          border-radius: 4px;
          font-weight: bold;
          cursor: pointer;
          font-size: 14px;
          width: 100%;
        }

        .primaryButton {
          background-color: #1976d2;
          color: white;
          border: none;
        }

        .secondaryButton {
          background-color: white;
          color: #1976d2;
          border: 1px solid #1976d2;
        }

        .features {
          display: grid;
          grid-template-columns: 1fr;
          gap: 15px;
        }

        .featureItem {
          display: flex;
          flex-direction: column;
          padding: 10px;
          background-color: #f5f5f5;
          border-radius: 4px;
        }

        .featureLabel {
          font-size: 12px;
          color: #666;
          margin-bottom: 4px;
        }

        .featureValue {
          font-size: 14px;
          font-weight: bold;
          color: #333;
          margin-bottom: 2px;
        }

        @media (min-width: 768px) {
          .contentWrapper {
            padding: 20px;
          }

          .mainContent {
            flex-direction: row;
            padding: 0;
          }

          .leftColumn {
            flex: 1;
            padding-right: 20px;
            padding-bottom: 0;
            border-right: 1px solid #e0e0e0;
            border-bottom: none;
          }

          .middleColumn {
            flex: 1.5;
            padding: 0 20px;
            border-right: 1px solid #e0e0e0;
            border-bottom: none;
          }

          .rightColumn {
            flex: 1;
            padding-left: 20px;
          }

          .header {
            flex-direction: column;
            align-items: flex-start;
          }

          .buttons {
            flex-direction: row;
          }

          .primaryButton,
          .secondaryButton {
            width: auto;
          }
        }

        @media (min-width: 1024px) {
          .header {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }

          .regulatedBadge {
            margin-bottom: 0;
          }

          .brokerLogo {
            margin-top: 0;
          }

          .buttons {
            flex-direction: row;
          }
        }
      `}</style>
    </div>
  );
};

export default BrokerReviewTop;