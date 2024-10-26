"use client"; // Indicates that this is a client component
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa'; 
import dynamic from 'next/dynamic';

// Dynamically import ReservationForm only on the client side
const ReservationForm = dynamic(() => import('../components/ReservationForm'), {
  ssr: false,
});

export default function ReservationPage() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="text-left bg-black text-gray-200 rounded-lg p-10 min-h-screen">
      <h2 className="text-5xl font-bold mb-5">Table Reservation:</h2>
      <h3 className="mb-4 text-3xl">Booking Time:</h3>
      <p className="mb-2 text-opacity-50">
        - Please note that after 12:30 am, we may have to give out your table.
      </p>
      <p className="mb-8 text-opacity-65">
        - Reservations can be made in advance; we recommend booking at least 2 days in advance to ensure availability.
      </p>

      <p className="mb-4 text-3xl">Reservation Policy:</p>
      <ol className="mb-8">
        <li className="mb-4">
          <strong>1. Cancellation/No Show Policy:</strong>
          <p>
            - Please notify us at least 2 hours in advance if you need to cancel or reschedule. Your deposit can be kept as credit for your next booking.
          </p>
        </li>
        <li className="mb-4">
          <strong>2. Payment Policy:</strong>
          <p>- Payment is processed at the time of booking or as specified in your confirmation.</p>
        </li>
        <li className="mb-4">
          <strong>3. Late Arrival:</strong>
          <p>- Please arrive on time. If running late, kindly inform us.</p>
        </li>
      </ol>

      <div className="mb-8 text-amber-500">
        <p>Dress code: High class and dashing.</p>
        <p>No slippers or shorts for men, no slippers for ladies.</p>
      </div>

      <p>
        Thank you for choosing <span className="text-amber-500">CAESER!!!</span> We look forward to serving you and ensuring a memorable experience. For any questions, please contact us.
      </p>

      <div>
        <h3 className="mb-3 text-3xl">Table Pricing:</h3>
        <div className="flex flex-col md:flex-row gap-8 px-4 py-4">
                <div className=" flex flex-row h-14 rounded-lg border-2 border-amber-500 ">
                    <div className="w-20 h-auto bg-yellow-500 "></div>
                    <div className="flex flex-col items-center justify-start w-35 h-10 text-left text-gray-200 font-bold text-sm rounded-lg px-6 ">
                            <span>Gold Table</span>
                            <span className="text-xl">₦2,000,000</span>
                    </div>
                </div>
                <div className=" flex flex-row h-14 rounded-lg border-2 border-gray-300 ">
                    <div className="w-20 h-auto bg-gray-300 "></div>
                    <div className="flex flex-col items-center justify-start w-35 h-10 text-left text-gray-200 font-bold text-sm rounded-lg px-6 ">
                            <span>Silver Table</span>
                            <span className="text-xl">₦1,000,000</span>
                    </div>
                </div>
            </div>

        <div className="flex items-center mt-2">
          <input type="checkbox" className="mr-2" />
          <span className="text-xs text-gray-400">
            By checking this box, you agree to our terms and conditions.
          </span>
        </div>

        <button
          onClick={handleShowForm}
          className="mt-8 bg-transparent border-2 border-gray-300 text-gray-300 px-8 py-3 font-semibold rounded-lg hover:bg-gray-200 hover:text-black flex gap-2 items-center transition-all duration-300"
        >
          <span>Proceed to reservation</span>
          <FaArrowRight />
        </button>

        {/* Conditionally render the ReservationForm */}
        {showForm && <ReservationForm onClose={handleCloseForm} />}
      </div>
    </div>
  );
}
