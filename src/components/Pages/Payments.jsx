import { useEffect, useState } from "react";
import Payment from "./Payment";

export default function Payments() {
  const [paymentProcess, setPaymentProcess] = useState(null);
  useEffect(() => {
    fetch("payment.json")
      .then((res) => res.json())
      .then((data) => setPaymentProcess(data));
  }, []);

  if (paymentProcess !== null) {
    return (
      <>
        <section className=" w-full md:max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
          {paymentProcess.map((payment) => (
            <Payment key={payment.id} payment={payment} />
          ))}
        </section>
      </>
    );
  }
}
