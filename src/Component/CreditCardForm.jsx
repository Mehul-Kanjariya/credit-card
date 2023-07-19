import React, { useState } from 'react';
import "./CreditCardForm.css";

const CreditCardForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  return (
    <div className="credit-card-form-container">
      <div className="credit-card-preview">
        <div className="credit-card">
          <div className="card-number">{cardNumber || '**** **** **** ****'}</div>
          <div className="card-holder">{cardName.toUpperCase() || 'CARDHOLDER NAME'}</div>
          <div className="card-expiry">{expiryDate || 'MM/YY'}</div>
          <div className="card-cvv">{cvv || 'CVV'}</div>
        </div>
      </div>
      <div className="credit-card-form">
        <h1>Credit Card Payment</h1>
        <form>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="Enter card number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardName">Cardholder Name</label>
            <input
              type="text"
              id="cardName"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              placeholder="Enter cardholder name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date</label>
            <input
              type="text"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="MM/YY"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="Enter CVV"
              required
            />
          </div>
          <button type="submit">Submit Payment</button>
        </form>
      </div>
    </div>
  );
};

export default CreditCardForm;
