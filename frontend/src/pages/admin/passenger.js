import React from "react";
import Passenger from "../../components/admin/passengers/passengers";
import NavBar from "../../layout/NavBar";
import Header from "../../components/Layout/Header";

const PassengerPage = () => {
  return (
    <main className="app">
      <Header />
      <div className="content">
        <Passenger />
      </div>
    </main>
  );
};

export default PassengerPage;
