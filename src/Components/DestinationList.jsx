import React from "react";
import { useGetAllDestinationQuery } from "../api/destinationAPI";
import Destination from "./Destination";

function DestinationList() {
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllDestinationQuery();

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = data.map((destination, index) => {
      return (
        <div className="container p-3">
          <article key={index}>
            <Destination destination={destination}></Destination>
          </article>
        </div>
      );
    });
  }

  return <div className="pt-3">{content}</div>;
}

export default DestinationList;
