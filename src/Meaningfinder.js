import React, { useState } from 'react';

function Meaningfinder() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = async () => {
    const response = await fetch(`https://api.agify.io/?name=${inputValue}`);
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <h1>Meaning Finder</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a name"
      />
      <button onClick={handleButtonClick}>Find Meaning</button>
    </div>
  );
}

export default Meaningfinder;