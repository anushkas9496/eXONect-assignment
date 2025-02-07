import React, { useState } from "react";
import CountryList from "./CountryList";
import "./styles.css"; 

const App = () => {
  const [countries, setCountries] = useState([]);

  // Add a new country
  const addCountry = () => {
    const name = window.prompt("Enter country name:");
    if (name && !countries.some((country) => country.name === name)) {
      setCountries([...countries, { id: Date.now(), name, states: [] }]);
    } else {
      alert("Country name cannot be empty or duplicate.");
    }
  };

  return (
    <div className="app">
      <h1> Country, State, and City Management System</h1>
      <button className="add-button" onClick={addCountry}>
        Add Country
      </button>
      <CountryList countries={countries} setCountries={setCountries} />
    </div>
  );
};

export default App;
