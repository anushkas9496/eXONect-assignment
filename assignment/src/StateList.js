import React from "react";
import CityList from "./CityList";

const StateList = ({ country, setCountries, countries }) => {
  // Add a new state
  const addState = () => {
    const stateName = window.prompt("Enter state name:");
    if (stateName && !country.states.some((state) => state.name === stateName)) {
      const newState = { id: Date.now(), name: stateName, cities: [] };
      setCountries(
        countries.map((c) =>
          c.id === country.id ? { ...c, states: [...c.states, newState] } : c
        )
      );
    } else {
      alert("State name cannot be empty or duplicate.");
    }
  };

  // Edit a state
  const editState = (stateId) => {
    const state = country.states.find((s) => s.id === stateId);
    const newName = window.prompt("Edit state name:", state.name);
    if (newName && !country.states.some((s) => s.name === newName)) {
      setCountries(
        countries.map((c) =>
          c.id === country.id
            ? {
                ...c,
                states: c.states.map((s) =>
                  s.id === stateId ? { ...s, name: newName } : s
                ),
              }
            : c
        )
      );
    } else {
      alert("Invalid or duplicate name.");
    }
  };

  // Delete a state
  const deleteState = (stateId) => {
    if (window.confirm("Are you sure you want to delete this state?")) {
      setCountries(
        countries.map((c) =>
          c.id === country.id
            ? { ...c, states: c.states.filter((s) => s.id !== stateId) }
            : c
        )
      );
    }
  };

  return (
    <table className="nested-table">
      <thead>
        <tr>
          <th>States</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {country.states.map((state) => (
          <React.Fragment key={state.id}>
            <tr>
              <td>{state.name}</td>
              <td>
                <button className="edit-button" onClick={() => editState(state.id)}>
                  Edit
                </button>
                <button className="delete-button" onClick={() => deleteState(state.id)}>
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <CityList
                  state={state}
                  country={country}
                  setCountries={setCountries}
                  countries={countries}
                />
              </td>
            </tr>
          </React.Fragment>
        ))}
        <tr>
          <td colSpan="2">
            <button className="add-button" onClick={addState}>
              Add State
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default StateList;
