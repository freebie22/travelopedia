import ReactDOM from "react-dom/client";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import DestinationIndex from "./Components/DestinationIndex";
import AddDestination from "./Components/AddDestination";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header></Header>
    <DestinationIndex>
      <AddDestination></AddDestination>
    </DestinationIndex>
    <Footer></Footer>
  </div>
);
