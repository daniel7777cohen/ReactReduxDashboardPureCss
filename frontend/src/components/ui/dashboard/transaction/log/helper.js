import desktop from "../../../../layout/assets/desktop.svg";
import mobile from "../../../../layout/assets/mobile.svg";
import visa from "../../../../layout/assets/visa.svg";
import amex from "../../../../layout/assets/amex.svg";
import mastercard from "../../../../layout/assets/mastercard.svg";
import diners from "../../../../layout/assets/diners.svg";

export const getDeviceIcon = (type) => {
  switch (type) {
    case "M":
      return mobile;
    case "D":
      return desktop;
    default:
      return null;
  }
};

export const getPaymentType = (type) => {
  switch (type) {
    case "amex":
      return amex;
    case "visa":
      return visa;
    case "mastercard":
      return mastercard;
      case "diners":
        return diners;
    default:
      return null;
  }
};

export const getDotColor = (type) => {
  switch (type) {
    case "Approved":
      return "#52c41a";
    case "Declined":
      return "#f5222d";
    case "Processing":
      return "#1890ff";
    case "Reviewd":
      return "#efefef";
    default:
      return null;
  }
};
