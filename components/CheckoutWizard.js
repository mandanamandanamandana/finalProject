import React from 'react';

export default function CheckoutWizard({ activeStep = 0 }) {
  return (
    <div className="flex flex-wrap mb-5">
      {['User Login', 'Shipping Address', 'Payment Method', 'Place Order'].map(
        (step, index) => (
          <div
            key={step}
            className={`flex-1 border-b-2
        text-center
        ${
          index <= activeStep
            ? 'border-[black] text-[black] font-semibold'
            : 'border-[#51944e] text-[#51944e]'
        }
          `}
          >
            {step}
          </div>
        )
      )}
    </div>
  );
}
