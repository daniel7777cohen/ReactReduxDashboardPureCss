import ApprovedSvg from "../../../layout/assets/approved.svg";
import DeclinedSvg from "../../../layout/assets/declined.svg";
import WaitingSvg from "../../../layout/assets/waiting.svg";
import TotalSvg from "../../../layout/assets/total.svg";

export const getDisplayName = (text) => {
  switch (text) {
    case "total":
      return "Total";
    case "approved":
      return "Approved";
    case "declined":
      return "Declined";
    case "approvalRate":
      return "Approval Rate";
    default:
      return null;
  }
};
export const getPatchedLog = (summaryLog) => {
  return Object.entries(summaryLog).map((log, i) => {
    const [text, amount] = log;
    const [icon, color] = getIconAndBg(text);
    const displayName = getDisplayName(text);

    return {
      key: i,
      displayName,
      amount,
      icon,
      color,
    };
  });
};

export const getIconAndBg = (keyName) => {
  switch (keyName) {
    case "total":
      return [TotalSvg, "#2f9bff"];
    case "approved":
      return [ApprovedSvg, "#41d94e"];
    case "declined":
      return [DeclinedSvg, "#e25e5e"];
    case "approvalRate":
      return [WaitingSvg, "#fc913f"];
    default:
      return ["", ""];
  }
};
