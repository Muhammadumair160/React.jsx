import React from "react";
import { CreditCard } from "../components/CreditCard";
import { PaymentPlan } from "../components/PaymentPlan";

export const Payment = () => {
  return (
    <>
      <PaymentPlan />
      <CreditCard />
    </>
  );
};
