"use client";
import { Icon } from "@iconify/react";
import useReactApexChart from "../../hook/useReactApexChart";

const UnitCountThree = () => {
  const { createChartThree } = useReactApexChart();

  const brokerData = [
    {
      title: "Total Brokers",
      subtitle: "All registered brokers",
      count: "45",
      change: "+ 27%",
      changeColorClass: "text-success-main",
      chartColor: "#F98C08",
      cardClass: "bg-gradient-end-3",
      iconBg: "bg-warning", // yellow
    },
    {
      title: "Active Brokers",
      subtitle: "Brokers with active",
      count: "38",
      change: "- 15%",
      changeColorClass: "text-danger-main",
      chartColor: "#5F80FF",
      cardClass: "bg-gradient-end-1",
     iconBg: "bg-primary", // blue
    },
    {
      title: "New Brokers",
      subtitle: "Registered this month",
      count: "12",
      change: "+ 10%",
      changeColorClass: "text-success-main",
      chartColor: "#C817F8",
      cardClass: "bg-gradient-end-5",
      iconBg: "bg-pink", // pink
    },
    {
      title: "Premium Brokers",
      subtitle: "Subscribed to premium",
      count: "22",
      change: "+ 5%",
      changeColorClass: "text-success-main",
      chartColor: "#2171EA",
      cardClass: "bg-gradient-end-6",
      iconBg: "bg-primary", // blue
    },
    {
      title: "Inactive Brokers",
      subtitle: "No activity in 30 days",
      count: "5",
      change: "- 8%",
      changeColorClass: "text-danger-main",
      chartColor: "#C2A633",
      cardClass: "bg-gradient-end-3",
      iconBg: "bg-warning", // yellow
    },
  ];

  const getIconByTitle = (title) => {
    switch (title) {
      case "Total Brokers":
        return "solar:home-smile-angle-outline";
      case "Active Brokers":
        return "solar:graph-up-bold-duotone";
      case "New Brokers":
        return "solar:user-plus-outline";
      case "Premium Brokers":
        return "solar:shield-star-outline";
      case "Inactive Brokers":
        return "solar:user-minus-outline";
      default:
        return "solar:chart-outline";
    }
  };

  return (
    <div className="row row-cols-xxxl-5 row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-4">
      {brokerData.map((item, index) => (
        <div className="col" key={index}>
          <div className={`card shadow-none border ${item.cardClass}`}>
            <div className="card-body p-20">
              <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
                <div className={`rounded-circle p-2 ${item.iconBg}`}>
                  <Icon
                    icon={getIconByTitle(item.title)}
                    className="w-24-px h-24-px text-white flex-shrink-0"
                  />
                </div>
                <div className="flex-grow-1">
                  <h6 className="text-xl mb-1">{item.title}</h6>
                  <p className="fw-medium text-secondary-light mb-0">{item.subtitle}</p>
                </div>
              </div>
              <div className="mt-3 d-flex flex-wrap justify-content-between align-items-center gap-1">
                <div>
                  <h6 className="mb-8">{item.count}</h6>
                  <span className={`${item.changeColorClass} text-md`}>{item.change}</span>
                </div>
                <div className="remove-tooltip-title rounded-tooltip-value">
                  {createChartThree(item.chartColor)}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UnitCountThree;
