import React, { useState } from 'react';
import './App.css'

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const ageDiffMs = today - birthDateObj;
    const ageDate = new Date(ageDiffMs);
    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);

    setAge(calculatedAge);
  };

  return (
    <div>
      <h2>Age Calculator</h2>
      <label>
        Enter your birthdate:
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </label>
      <button onClick={calculateAge}>Calculate Age</button>
      {age && <p>Your age is {age} years.</p>}
    </div>
  );
};

export default AgeCalculator;
