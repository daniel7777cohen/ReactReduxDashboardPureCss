
import ApprovedSvg from "../components/layout/assets/approved.svg";
import DeclinedSvg from "../components/layout/assets/declined.svg";
import WaitingSvg from "../components/layout/assets/waiting.svg";
import TotalSvg from "../components/layout/assets/total.svg";

export const summaryLogs = [
  {
    key: 1,
    text: "Total",
    amount: 13000,
    icon: TotalSvg,
    color: "#2f9bff",
    name: "total",
  },
  {
    key: 2,
    text: "Approved",
    amount: 126560,
    icon: ApprovedSvg,
    color: "#41d94e",
    name: "Approved",
  },
  {
    key: 3,
    text: "Declined",
    amount: 10143,
    icon: DeclinedSvg,
    color: "#e25e5e",
    name: "Declined",
  },
  {
    key: 4,
    text: "Approval Rate",
    amount: 78,
    icon: WaitingSvg,
    color: "#fc913f",
    name: "approvalRate",
  },
];