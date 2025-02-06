import React from "react";

const CityList = ({ state, country, setCountries, countries }) => {
  // Add a new city
  const addCity = () => {
    const cityName = window.prompt("Enter city name:");
    if (cityName && !state.cities.some((city) => city === cityName)) {
      setCountries(
        countries.map((c) =>
          c.id === country.id
            ? {
                ...c,
                states: c.states.map((s) =>
                  s.id === state.id ? { ...s, cities: [...s.cities, cityName] } : s
                ),
              }
            : c
        )
      );
    } else {
      alert("City name cannot be empty or duplicate.");
    }
  };

  // Delete a city
  const deleteCity = (cityName) => {
    if (window.confirm("Are you sure you want to delete this city?")) {
      setCountries(
        countries.map((c) =>
          c.id === country.id
            ? {
                ...c,
                states: c.states.map((s) =>
                  s.id === state.id
                    ? { ...s, cities: s.cities.filter((city) => city !== cityName) }
                    : s
                ),
              }
            : c
        )
      );
    }
  };

  return (
    <table className="nested-table">
      <thead>
        <tr>
          <th>Cities</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {state.cities.map((city, index) => (
          <tr key={index}>
            <td>{city}</td>
            <td>
              <button className="delete-button" onClick={() => deleteCity(city)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
        <tr>
          <td colSpan="2">
            <button className="add-button" onClick={addCity}>
              Add City
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CityList;
