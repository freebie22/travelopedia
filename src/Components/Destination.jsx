import React from "react";
import { useDeleteDestinationMutation, useUpdateDestinationMutation  } from "../api/destinationAPI";
import { useState } from "react";

function Destination(props) {
  const [deleteDestinationMutaion] = useDeleteDestinationMutation();
  const [updateDestinationMutaion] = useUpdateDestinationMutation();

  const [destinationUpdating, setUpdateState] = useState(() => {
    return { isUpdating: false };
  });

  const [destinationCity, setDestinationCity] = useState(() => {
    return props.destination.city;
  });
  const [destinationCountry, setDestinationCountry] = useState(() => {
    return props.destination.country;
  });

  const updateClick = () => {

    let city = "";
    let country = "";

    if(destinationCity === "")
    {
        city = props.destination.city;
    }
    else{
        city = destinationCity
    }

    if(destinationCountry === "")
    {
        country  = props.destination.country ;
    }
    else{
        country = destinationCountry 
    }

    let updatedDest = {
      id: props.destination.id,
      city: city,
      country: country,
      daysNeeded: props.destination.daysNeeded,
    };

    updateDestinationMutaion(updatedDest);
    console.log(updatedDest);

    setDestinationCity("");
    setDestinationCountry("");
    setUpdateState(false);
  };

  return (
    <div
      className="row text-center p-2 m-2"
      style={{ border: "1px solid #777" }}
    >
      <div className="col-3 col-md-2 offset-md-1 p-1">
        {destinationUpdating && destinationUpdating.isUpdating ? (
          <div>
            <input
              className="form-control"
              type="text"
              placeholder="City..."
              defaultValue={props.destination.city}
              onChange={(e) => setDestinationCity(e.target.value)}
            ></input>
          </div>
        ) : (
          <div>
            <span className="text-info">{props.destination.city}</span>
          </div>
        )}
      </div>
      <div className="col-3 col-md-2 offset-md-1 p-1">
        {destinationUpdating && destinationUpdating.isUpdating ? (
          <div>
            <input
              className="form-control"
              placeholder="Country..."
              type="text"
              defaultValue={props.destination.country}
              onChange={(e) => setDestinationCountry(e.target.value)}
            ></input>
          </div>
        ) : (
          <div>
            <span className="text-info">{props.destination.country}</span>
          </div>
        )}
      </div>
      <div className="col-3 col-md-2 offset-md-1 p-1">
        <span className="text-warning">
          {props.destination.daysNeeded} days
        </span>
      </div>
      <div className="col-3 col-md-2 offset-md-1 p-1">
        {destinationUpdating && destinationUpdating.isUpdating ? (
          <div>
            <button
              onClick={() => updateClick()}
              className="btn btn-success m-2"
            >
              Confirm
            </button>
            <button
              onClick={() =>
                setUpdateState({
                  isUpdating: false,
                  updatingDestination: undefined,
                })
              }
              className="btn btn-primary m-2"
            >
              Cancel
            </button>
          </div>
        ) : (
          <div>
            <button
              onClick={() =>
                setUpdateState({
                  isUpdating: true,
                })
              }
              className="btn btn-warning m-2"
            >
              Edit
            </button>
            <button
              onClick={() => deleteDestinationMutaion(props.destination.id)}
              className="btn btn-danger m-2"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Destination;
