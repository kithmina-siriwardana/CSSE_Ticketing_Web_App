import React from "react";
import SignIn from "../../components/client/signIn";
import NavBar from "../../layout/NavBar";

const SignInPage = () => {
  return (
    <main className="app">
      <NavBar />
      <div className="content">
        <SignIn />
      </div>
    </main>
  );
};

export default SignInPage;