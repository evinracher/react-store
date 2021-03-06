import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "../containers/Checkout";
import Home from "../containers/Home";
import Information from "../containers/Information";
import NotFound from "../containers/NotFound";
import Payment from "../containers/Payment";
import Success from "../containers/Success";
import Layout from "../components/Layout";
import AppContext from "../context/AppContext";
import useAppState from "../hooks/useAppState";

const App = () => {
  const AppState = useAppState();
  const stateCount = Object.keys(AppState).length;
  return stateCount > 0 ? (
    <AppContext.Provider value={AppState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route
              exact
              path="/checkout/information"
              element={<Information />}
            />
            <Route exact path="/checkout/payment" element={<Payment />} />
            <Route exact path="/checkout/success" element={<Success />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  ) : (
    <h1>Loading...</h1>
  );
};

export default App;
