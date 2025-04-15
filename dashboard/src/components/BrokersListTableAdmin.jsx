"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

const loadJQueryAndDataTables = async () => {
  const $ = (await import("jquery")).default;
  await import("datatables.net-dt/js/dataTables.dataTables.js");
  return $;
};

const BrokersListTableAdmin = () => {
  const [brokers, setBrokers] = useState([]);

  useEffect(() => {
    const data = [
      {
        brokerName: "eToro",
        minimumDeposit: "$50",
        optionsFee: "$0.75",
        inactivityFee: "$10/month after 12 months",
        rating: 4.5,
      },
      {
        brokerName: "Robinhood",
        minimumDeposit: "$0",
        optionsFee: "$0",
        inactivityFee: "None",
        rating: 4.2,
      },
      {
        brokerName: "TD Ameritrade",
        minimumDeposit: "$0",
        optionsFee: "$0.65",
        inactivityFee: "None",
        rating: 4.7,
      },
    ];
    setBrokers(data);
  }, []);

  useEffect(() => {
    let table;
    if (brokers.length) {
      loadJQueryAndDataTables()
        .then(($) => {
          window.$ = window.jQuery = $;
          table = $("#dataTable").DataTable({ pageLength: 10 });
        })
        .catch((error) =>
          console.error("Error loading jQuery or DataTables:", error)
        );
    }
    return () => {
      if (table) table.destroy(true);
    };
  }, [brokers]);

  return (
    <div className="card basic-data-table">
      <div className="card-header">
        <h5 className="card-title mb-0">Top Trading Brokers</h5>
      </div>
      <div className="card-body">
        <table
          className="table bordered-table mb-0"
          id="dataTable"
          data-page-length={10}
        >
          <thead>
            <tr>
              <th>S.N.</th>
              <th>Broker Name</th>
              <th>Minimum Deposit</th>
              <th>Options Fee</th>
              <th>Inactivity Fee</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {brokers.map((broker, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{broker.brokerName}</td>
                <td>{broker.minimumDeposit}</td>
                <td>{broker.optionsFee}</td>
                <td>{broker.inactivityFee}</td>
                <td>{broker.rating} / 5</td>
                <td>
                  <Link
                    href="#"
                    className="w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center"
                  >
                    <Icon icon="iconamoon:eye-light" />
                  </Link>
                  <Link
                    href="#"
                    className="w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center"
                  >
                    <Icon icon="lucide:edit" />
                  </Link>
                  <Link
                    href="#"
                    className="w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center"
                  >
                    <Icon icon="mingcute:delete-2-line" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrokersListTableAdmin;
