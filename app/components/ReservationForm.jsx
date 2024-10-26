import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { FaTimes } from 'react-icons/fa'; 
import "react-datepicker/dist/react-datepicker.css";
import { PaystackButton } from 'react-paystack';
import axios from 'axios';

const ReservationForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(null);
  const [tableType, setTableType] = useState('');
  const [amount, setAmount] = useState(0);
  const [errors, setErrors] = useState({}); // Error state

  // Calculate valid dates for the calendar
  const getValidDates = () => {
    const validDays = [5, 6, 0, 1]; // Friday, Saturday, Sunday, Monday
    const today = new Date();
    const validDates = [];

    const year = today.getFullYear();
    const month = today.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      if (validDays.includes(date.getDay())) {
        validDates.push(date);
      }
    }
    return validDates;
  };

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required.";
    if (!email) newErrors.email = "Email is required.";
    if (!phone) newErrors.phone = "Phone number is required.";
    if (!date) newErrors.date = "Date is required.";
    if (!tableType) newErrors.tableType = "Please select a table type.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Validate form before proceeding

    const paymentData = {
      amount: amount * 100, // Convert to kobo
      email: email,
    };

    const paystackProps = {
      email,
      amount: amount * 100,
      publicKey: 'your-paystack-public-key',
      onSuccess: (reference) => {
        axios.post('/api/send-confirmation', { reference, name, email, phone, date, tableType });
        onClose(); // Close the form
      },
      onClose: () => alert('Payment cancelled'),
    };

    return (
      <PaystackButton {...paystackProps} />
    );
  };

  return (
    <div className="modal justify-start text-gray-300">
      <div className='flex justify-between items-center mb-4'>
        <h2 className="text-3xl font-bold text-left">Reservation Form</h2>
        <div className="flex items-center">
          <FaTimes className="text-red-500 cursor-pointer" onClick={onClose} />
        </div>
      </div>
     
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={`w-full p-2 border bg-gray-200 ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={`w-full p-2 border  bg-gray-200 ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label>Phone Number:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className={`w-full p-2 border  bg-gray-200 ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded`}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>
        <div className="mb-4">
          <label>Date:</label>
          <div >
          <DatePicker
            selected={date}
            onChange={setDate}
            filterDate={(date) => getValidDates().some(validDate => validDate.toDateString() === date.toDateString())}
            minDate={new Date()}
            className={`w-full p-2 border text-black bg-gray-200 ${errors.date ? 'border-red-500' : 'border-gray-300'} rounded`}
          />
          </div>
         
          {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
        </div>
        <div className="mb-4">
          <label>Table Type:</label>
          <select
            value={tableType}
            onChange={(e) => setTableType(e.target.value)}
            required
            className={`w-full p-2 border text-black bg-gray-200 ${errors.tableType ? 'border-red-500' : 'border-gray-300'} rounded`}
          >
            <option value="">Select a table</option>
            <option value="gold">Gold Table - ₦2,000,000</option>
            <option value="silver">Silver Table - ₦1,000,000</option>
          </select>
          {errors.tableType && <p className="text-red-500 text-sm">{errors.tableType}</p>}
        </div>
        <button type="submit" className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 transition duration-200">
          Pay with Paystack
        </button>
      </form>
      <button onClick={onClose} className="mt-4 text-red-500">Cancel</button>
    </div>
  );
};

export default ReservationForm;
