import ReactDOM from "react-dom/client";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import DestinationIndex from "./Components/DestinationIndex";
import AddDestination from "./Components/AddDestination";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { destinationAPI } from "./api/destinationAPI";
import DestinationList from "./Components/DestinationList";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import RandomDestination from "./Components/RandomDestination";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Header></Header>
    <DestinationIndex>
      <AddDestination></AddDestination>
      <DestinationList></DestinationList>
      <RandomDestination></RandomDestination>
    </DestinationIndex>
    <Footer></Footer>
  </Provider>
);
