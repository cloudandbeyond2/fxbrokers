import React from "react";

const BrokerDetails = () => {
  return (
    <section className="container my-5 d-flex justify-content-center">
      <div className="card shadow w-100" style={{ maxWidth: "1000px" }}>
        <div
          className="card-body text-muted"
          style={{ maxWidth: "900px", margin: "0 auto", fontSize: "0.95rem" }}
        >
          <h2 className="card-title mb-4 text-center" id="broker-details">
            Broker Details
          </h2>

          {/* First row of mini tables */}
          <div className="row row-cols-1 row-cols-md-3 mb-4">
            {[
              ["Minimum Trade Size:", "0.01"],
              ["Maximum Leverage:", "200:1"],
              ["Minimum to Open Live:", "$250"],
            ].map(([label, value], i) => (
              <div className="col mb-3" key={i}>
                <table className="table table-bordered small mb-0">
                  <tbody>
                    <tr>
                      <th style={{ color: "#2f3e46" }}>{label}</th>
                      <td>{value}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          {/* Second row of complex tables */}
          <div className="row row-cols-1 row-cols-md-3 mb-4">
            {/* Column 1 */}
            <div className="col mb-3">
              <table className="table table-bordered small">
                <tbody>
                  {[
                    ["Established:", "1974"],
                    [
                      "Address:",
                      "Cannon Bridge House, 25 Dowgate Hill, London, EC4R 2YA, United Kingdom",
                    ],
                    ["Contact:", "helpdesk@ig.com, (44) 207 896 0079"],
                    [
                      "Regional Offices:",
                      "Australia, South Africa, UAE, United States",
                    ],
                    ["Regulators:", "ASIC, FSCA, DFSA, FCA, NFA"],
                    [
                      "Prohibited Countries:",
                      "Afghanistan, Cuba, Iran, Iraq, North Korea, Sudan, Syria, etc.",
                    ],
                  ].map(([label, value], i) => (
                    <tr key={i}>
                      <th style={{ color: "#2f3e46" }}>{label}</th>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Column 2 */}
            <div className="col mb-3">
              <table className="table table-bordered small mb-3">
                <tbody>
                  <tr>
                    <th style={{ color: "#2f3e46" }}>Trading platforms:</th>
                    <td>MT4, WebTrader, MobileTrader (MobileApp), ProRealTime</td>
                  </tr>
                </tbody>
              </table>
              <table className="table table-bordered small mb-3">
                <tbody>
                  {[
                    ["Web Trading:", "✅ Yes"],
                    ["Mobile Trading:", "✅ Yes"],
                    ["ECN:", "✅ Yes"],
                  ].map(([label, value], i) => (
                    <tr key={i}>
                      <th style={{ color: "#2f3e46" }}>{label}</th>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <h6 className="mb-3" style={{ color: "#2f3e46" }}>
                Trading Instruments
              </h6>
              <table className="table table-bordered small">
                <tbody>
                  {[
                    ["Currencies:", "(105+)"],
                    ["Cryptocurrencies:", "(10+) Bitcoin, Litecoin, Ethereum"],
                    [
                      "CFD:",
                      "(16000+) Gold, Silver, Stocks, Stock Indexes, Bonds, Bond Indexes, Oil, Other Commodities",
                    ],
                  ].map(([label, value], i) => (
                    <tr key={i}>
                      <th style={{ color: "#2f3e46" }}>{label}</th>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Column 3 */}
            <div className="col mb-3">
              <h6 className="mb-3" style={{ color: "#2f3e46" }}>
                Trading Conditions
              </h6>
              <table className="table table-bordered small mb-3">
                <tbody>
                  {[
                    ["EAs/Robots:", "✅ Yes"],
                    ["News Trading:", "✅ Yes"],
                    ["Scalping:", "✅ Yes"],
                  ].map(([label, value], i) => (
                    <tr key={i}>
                      <th style={{ color: "#2f3e46" }}>{label}</th>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <h6 className="mb-3" style={{ color: "#2f3e46" }}>
                Managed Accounts & Social Trading
              </h6>
              <table className="table table-bordered small">
                <tbody>
                  {[
                    ["MAM:", "✅ Yes"],
                    ["PAMM:", "✅ Yes"],
                  ].map(([label, value], i) => (
                    <tr key={i}>
                      <th style={{ color: "#2f3e46" }}>{label}</th>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Third row - Deposit & Withdrawal */}
          <div className="row row-cols-1 row-cols-md-2 mb-4">
            {[
              [
                "Deposit Methods:",
                "Bank Wire (BankTransfer/SWIFT), VISA, MasterCard, PayPal",
              ],
              [
                "Withdrawal Methods:",
                "Bank Wire (BankTransfer/SWIFT), VISA, MasterCard, PayPal",
              ],
            ].map(([label, value], i) => (
              <div className="col mb-3" key={i}>
                <table className="table table-bordered small mb-0">
                  <tbody>
                    <tr>
                      <th style={{ color: "#2f3e46" }}>{label}</th>
                      <td>{value}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrokerDetails;
