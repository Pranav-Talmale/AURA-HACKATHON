/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../Css/networthform.css';
import { AddUserNetworth } from '../api/DashboardAPI'
import { useNavigate } from 'react-router-dom';
const NetWorthForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    cash: 0,
    bankAmount: 0,
    mutualFunds: 0,
    sip: 0,
    stocks: 0,
    bonds: 0,
    loans: [{ category: '', amount: 0 }],
    otherNotes: [{ note: '' }],
  });
  const navigate = useNavigate();
  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleLoanChange = (index, field, value) => {
    const updatedLoans = [...formData.loans];
    updatedLoans[index][field] = value;
    setFormData({
      ...formData,
      loans: updatedLoans,
    });
  };

  const addLoan = () => {
    setFormData({
      ...formData,
      loans: [...formData.loans, { category: '', amount: 0 }],
    });
  };

  const handleOtherNoteChange = (index, value) => {
    const updatedOtherNotes = [...formData.otherNotes];
    updatedOtherNotes[index] = value;
    setFormData({
      ...formData,
      otherNotes: updatedOtherNotes,
    });
  };

  const addOtherNote = () => {
    setFormData({
      ...formData,
      otherNotes: [...formData.otherNotes, { note: '' }],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      await AddUserNetworth(formData);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error submitting form: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name" aria-required>Your Name:</label>
      <input
        type="text"
        id="name"
        value={formData.name}
        onChange={(e) => handleInputChange('name', e.target.value)}
      />

      <label htmlFor="cash">Amount you have in Cash:</label>
      <input
        type="number"
        id="cash"
        value={formData.cash}
        onChange={(e) => handleInputChange('cash', parseFloat(e.target.value))}
      />

      <label htmlFor="bankAmount" aria-required>Amount you have in your Bank Account:</label>
      <input
        type="number"
        id="bankAmount"
        value={formData.bankAmount}
        onChange={(e) => handleInputChange('bankAmount', parseFloat(e.target.value))}
      />

      <div>
        <label htmlFor="mutualFunds">Amount you have in Mutual Funds:</label>
        <input
          type="number"
          id="mutualFunds"
          value={formData.mutualFunds}
          onChange={(e) => handleInputChange('mutualFunds', parseFloat(e.target.value))}
        />
      </div>

      <div>
        <label htmlFor="sip">Amount you have in SIP:</label>
        <input
          type="number"
          id="sip"
          value={formData.sip}
          onChange={(e) => handleInputChange('sip', parseFloat(e.target.value))}
        />
      </div>

      <div>
        <label htmlFor="stocks">Amount you have invested in Stocks:</label>
        <input
          type="number"
          id="stocks"
          value={formData.stocks}
          onChange={(e) => handleInputChange('stocks', parseFloat(e.target.value))}
        />
      </div>

      <div>
        <label htmlFor="bonds">Amount you have in Bonds:</label>
        <input
          type="number"
          id="bonds"
          value={formData.bonds}
          onChange={(e) => handleInputChange('bonds', parseFloat(e.target.value))}
        />
      </div>

      <div>
        <h4>LOANS:</h4>
        {formData.loans.map((loan, index) => (
          <div key={index}>
            <label htmlFor={`loanCategory${index}`}>Loan Category:</label>
            <input
              type="text"
              id={`loanCategory${index}`}
              value={loan.category}
              onChange={(e) => handleLoanChange(index, 'category', e.target.value)}
            />

            <label htmlFor={`loanAmount${index}`}>Loan Amount:</label>
            <input
              type="number"
              id={`loanAmount${index}`}
              value={loan.amount}
              onChange={(e) => handleLoanChange(index, 'amount', parseFloat(e.target.value))}
            />
          </div>
        ))}
        <button type="button" onClick={addLoan}>
          + Add Loan
        </button>
      </div>

      {/* Note Inputs */}
      <div>
        <h4>NOTES:</h4>
        {formData.otherNotes.map((note, index) => (
          <div key={index}>
            <label htmlFor={`note${index}`}>Note:</label>
            <input
              type="text"
              id={`note${index}`}
              value={note.note}
              onChange={(e) => handleOtherNoteChange(index, { note: e.target.value })}
            />
          </div>
        ))}
        <button type="button" onClick={addOtherNote}>
          + Add Note
        </button>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default NetWorthForm;
