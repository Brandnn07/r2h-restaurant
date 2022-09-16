import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Helmet} from "react-helmet";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import RestaurantsPage from "./pages/RestaurantsPage";
import FriendsPage from "./pages/FriendsPage";
import ReservationPage from "./pages/ReservationPage";

function App() {
  return (
    <>
    <Helmet>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"></script>
    </Helmet>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/restaurants" element={<RestaurantsPage />} />
          <Route exact path="/friends" element={<FriendsPage />} />
          <Route exact path="/reservation" element={<ReservationPage />} />
        </Routes>
        <script src="Map.js"></script>
      </Router>
    </>
  );
}

export default App;
