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
import useState from "../hooks/useState";

const App = () => {
  const { state } = useState();
  return (
    <BrowserRouter>
      <AppContext.Provider value={state}>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/checkout/information" element={<Information />} />
            <Route exact path="/checkout/payment" element={<Payment />} />
            <Route exact path="/checkout/success" element={<Success />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </BrowserRouter>
  );
};

export default App;
