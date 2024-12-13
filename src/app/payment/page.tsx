import React from "react";
import PaymentForm from "@/components/payment/PaymentForm";
import Image from "next/image";

function page() {
  return (
    <div className="main_Margin overflow-x-hidden relative grid grid-cols-1 sm:grid-cols-2 ">
      <PaymentForm />
      <div className="w-full object-cover object-center h-[350px] sm:h-auto relative order-[-1] sm:order-2">
        <Image
          src="/paymentView.webp"
          alt="coupon banner"
          loading="eager"
          unoptimized={true}
          fill
          sizes=" (max-width: 769px) 100vw,50vw"
          priority
        />
      </div>
    </div>
  );
}

export default page;
