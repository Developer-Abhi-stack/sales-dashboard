import React from 'react';

const DatePicker = ({ onDateChange }) => {
  const [date1, setDate1] = React.useState('');
  const [date2, setDate2] = React.useState('');

  const handleChange = () => {
    if (date1 && date2) {
      onDateChange(date1, date2);
    }
  };

  return (
    <div className="mb-4">
      <label className="block mb-2">Select Dates for Comparison:</label>
      <input 
        type="date" 
        value={date1} 
        onChange={e => setDate1(e.target.value)} 
        className="mr-2" 
      />
      <input 
        type="date" 
        value={date2} 
        onChange={e => setDate2(e.target.value)} 
        className="mr-2" 
      />
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
