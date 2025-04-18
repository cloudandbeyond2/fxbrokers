"use client";

import Image from "next/image";

import broker1 from "@/public/images/broker-category/broker-1.png";
import broker2 from "@/public/images/broker-category/broker-2.png";
import broker3 from "@/public/images/broker-category/broker-3.png";

const topBrokers = [
  {
    name: "eToro",
    logo: broker1,
    leverage: "30:1",
    minDeposit: "$10",
    platforms: "eToro Platform",
    regulation: "FCA, ASIC, CySEC",
  },
  {
    name: "Pepperstone",
    logo: broker2,
    leverage: "500:1",
    minDeposit: "$200",
    platforms: "MT4, MT5, cTrader",
    regulation: "ASIC, FCA, DFSA",
  },
  {
    name: "IC Markets",
    logo: broker3,
    leverage: "500:1",
    minDeposit: "$200",
    platforms: "MT4, MT5, cTrader",
    regulation: "ASIC, CySEC, FSA",
  },
  {
    name: "IG Markets",
    logo: broker1,
    leverage: "200:1",
    minDeposit: "$250",
    platforms: "MT4, ProRealTime",
    regulation: "FCA, ASIC, NFA",
  },
  {
    name: "XM",
    logo: broker2,
    leverage: "888:1",
    minDeposit: "$5",
    platforms: "MT4, MT5",
    regulation: "CySEC, ASIC, IFSC",
  },
  {
    name: "Saxo Bank",
    logo: broker3,
    leverage: "100:1",
    minDeposit: "$2000",
    platforms: "SaxoTraderGO, MT4",
    regulation: "FSA, FINMA, ASIC",
  },
];

const SimiliarBrokers = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="container">
        <h2 className="text-center mb-5">Top Forex Brokers</h2>
        <div className="row g-4">
          {topBrokers.map((broker, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0 rounded-4 p-4 text-center">
                <Image
                  src={broker.logo}
                  alt={broker.name}
                  width={60}
                  height={60}
                  className="mb-3 mx-auto"
                />
                <h5 className="fw-bold mb-2">{broker.name}</h5>
                <p className="text-muted mb-1">
                  <strong>Leverage:</strong> {broker.leverage}
                </p>
                <p className="text-muted mb-1">
                  <strong>Min Deposit:</strong> {broker.minDeposit}
                </p>
                <p className="text-muted mb-1">
                  <strong>Platforms:</strong> {broker.platforms}
                </p>
                <p className="text-muted">
                  <strong>Regulated by:</strong> {broker.regulation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimiliarBrokers;
