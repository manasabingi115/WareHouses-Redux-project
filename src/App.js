import "./styles.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Data from "./Data";
import WarehouseList from "./WarehouseList";
import DetailsPage from "./Details-page";
import { useDispatch } from "react-redux";
import { setData } from "./actions";

export default function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setData(Data));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">
          <h1>Warehouses</h1>
        </Link>
        <br />
        <Routes>
          <Route exact path="/" element={<WarehouseList />} />
          <Route exact path="/details/:index" element={<DetailsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
