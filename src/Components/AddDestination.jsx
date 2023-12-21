import React from "react";
import { useState } from "react";
import { useAddDestinationMutation } from "../api/destinationAPI";

function AddDestination() {

  const [newCity, setNewCity] = useState("");
  const [newCountry, setNewCountry] = useState("");
  const [addDestinationMutation] = useAddDestinationMutation();

  const handleSubmit = (e) =>{
    e.preventDefault();
    //addDestination
    addDestinationMutation({
      id: Math.random() * 100,
      city: newCity,
      country: newCountry,
      daysNeeded: parseInt(Math.random() * 10) + 1,
    });
    setNewCity("");
    setNewCountry("");
  }

  return (
    <div className="p-4 border">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="row col-8 offset-2">
          <h4 className="text-center">Enter a new destination</h4>
          <div className="col-5 p-1">
            <input
              type="text"
              className="form-control"
              placeholder="Enter city..."
              onChange={(e) => setNewCity(e.target.value)}
            ></input>
          </div>
          <div className="col-5 p-1">
            <input
              type="text"
              className="form-control"
              placeholder="Enter country..."
              onChange={(e) => setNewCountry(e.target.value)}
            ></input>
          </div>
          <div className="col-2 p-1">
            <button className="btn btn-success form-control">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddDestination;
