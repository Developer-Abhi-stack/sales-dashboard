import React from 'react';

// The DatePicker component accepts an onDateChange prop, which is a function
// that will be called when both dates are selected and the "Compare" button is clicked.
const DatePicker = ({ onDateChange }) => {
  // useState hooks to manage the state of the two dates
  const [date1, setDate1] = React.useState(''); // Initial state for the first date
  const [date2, setDate2] = React.useState(''); // Initial state for the second date

  // Function to handle the button click event
  const handleChange = () => {
    if (date1 && date2) {
      // If both dates are selected, call the onDateChange prop function
      onDateChange(date1, date2);
    }
  };

  return (
    <div className="mb-4">
      {/* Label for the date input fields */}
      <label className="block mb-2">Select Dates for Comparison:</label>

      {/* Input for the first date */}
      <input 
        type="date" 
        value={date1} 
        onChange={e => setDate1(e.target.value)} 
        className="mr-2" 
      />

       {/* Input for the second date */}
      <input 
        type="date" 
        value={date2} 
        onChange={e => setDate2(e.target.value)} 
        className="mr-2" 
      />

      {/* Button to trigger date comparison */}
      <button 
        onClick={handleChange} 
        className="bg-blue-500 text-white px-4 py-2 rounded" 
        disabled={!date1 || !date2} // Disable button if either date is empty
      >
        Compare
      </button>
    </div>
  );
};

export default DatePicker;
