import React from "react";
import StateList from "./StateList";

const CountryList = ({ countries, setCountries }) => {
  // Edit a country
  const editCountry = (id) => {
    const country = countries.find((c) => c.id === id);
    const newName = window.prompt("Edit country name:", country.name);
    if (newName && !countries.some((c) => c.name === newName)) {
      setCountries(
        countries.map((c) => (c.id === id ? { ...c, name: newName } : c))
      );
    } else {
      alert("Invalid or duplicate name.");
    }
  };

  // Delete a country
  const deleteCountry = (id) => {
    if (window.confirm("Are you sure you want to delete this country?")) {
      setCountries(countries.filter((c) => c.id !== id));
    }
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Countries</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((country) => (
          <React.Fragment key={country.id}>
            <tr>
              <td>{country.name}</td>
              <td>
                <button className="edit-button" onClick={() => editCountry(country.id)}>
                  Edit
                </button>
                <button className="delete-button" onClick={() => deleteCountry(country.id)}>
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <StateList
                  country={country}
                  setCountries={setCountries}
                  countries={countries}
                />
              </td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default CountryList;
