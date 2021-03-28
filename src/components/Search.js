import React from "react";

const Search = () => {
  return (
      <div className="input-group mb-3" align ="center">
        <select className="form-select" id="inputGroupSelect02">
          <option defaultValue>Choose...</option>
          <option value="1">Name</option>
          <option value="2">Email</option>
          <option value="3">Location</option>
        </select>
        <br/>
        <input></input> <button type="button" className="btn btn-secondary">Search</button>
      </div>
  );
};

export default Search;
