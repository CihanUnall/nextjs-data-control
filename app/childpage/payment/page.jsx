"use client";
import React from "react";

function PaymentOptionsPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl max-w-lg w-full p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Payment Options
        </h1>

        <p className="text-gray-600 text-lg mb-6 text-center">
          Thank you for choosing us! Please choose your preferred payment method
          below. <br />
          Please note, online payments are not available at this time.
        </p>

        {/* Payment Methods */}
        <div className="space-y-6">
          {/* PayPal Option */}
          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
            <i className="fa-brands fa-paypal text-blue-600 text-3xl"></i>
            <span className="text-gray-700 font-semibold text-xl">PayPal</span>
          </div>

          {/* Visa Card Option */}
          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
            <i className="fa-brands fa-cc-visa text-blue-600 text-3xl"></i>
            <span className="text-gray-700 font-semibold text-xl">
              Visa / MasterCard
            </span>
          </div>

          {/* Bank Transfer Option */}
          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
            <i className="fa-brands fa-cc-mastercard text-red-600 text-3xl"></i>
            <span className="text-gray-700 font-semibold text-xl">
              Bank Transfer
            </span>
          </div>

          {/* Cash Payment Option */}
          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
            <i className="fa-solid fa-money-bill-wave text-green-600 text-3xl"></i>
            <span className="text-gray-700 font-semibold text-xl">
              Cash Payment
            </span>
          </div>
        </div>

        {/* Payment Instructions */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            Once you select your preferred method, please contact our support to
            finalize your payment process.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PaymentOptionsPage;
