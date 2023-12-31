import { lazy } from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import { useAuthContext } from "./hooks/useAuthContext";


const SignInPage = lazy(() => import("./pages/client/SignInPage"));
const SignUpPage = lazy(() => import("./pages/client/SignUpPage"));
const HomePage = lazy(() => import("./pages/client/home"));
const UserPage = lazy(() => import("./pages/client/user"));
          
const Subscription = lazy(() => import("./pages/client/SubscriptionPlanPage"));

const DriverRegPage = lazy(() => import("./pages/client/driverReg"));

const PassengerPage = lazy(() => import("./pages/admin/passenger"));
const DriverAcceptPage = lazy(() => import("./pages/admin/driverAccept"));

const BalanceUpdatePage = lazy(() => import("./pages/client/balanceUpdate"))
const TimeTablePage = lazy(() => import("./pages/client/timeTable"))
const ViewBusJourneys = lazy(() => import("./pages/admin/viewBusJourneys"))


function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <HomePage /> : <Navigate to="/signIn" />}
            />
            {/* <Route path="/signIn" element={<SignInPage />} /> */}
            <Route
              path="/signIn"
              element={!user ? <SignInPage /> : <Navigate to="/home" />}
            />
            <Route
              path="/signUp"
              element={!user ? <SignUpPage /> : <Navigate to="/home" />}
            />
            <Route
              path="/home"
              element={user ? <HomePage /> : <Navigate to="/signIn" />}
            />
            <Route
              path="/user"
              element={user ? <UserPage /> : <Navigate to="/signIn" />}
            />
            <Route
              path="/passengers"
              element={user ? <PassengerPage /> : <Navigate to="/signIn" />}
            />
            <Route
              path="/subscription"
              element={user ? <Subscription /> : <Navigate to="/signIn" />}

/>          
<Route

              path="/driverReg"
              element={user ? <DriverRegPage /> : <Navigate to="/signIn" />}
            />
            <Route
              path="/driverAccept"
              element={user ? <DriverAcceptPage /> : <Navigate to="/signIn" />}

            />
              <Route
              path="/balanceUpdate"
              element={user ? <BalanceUpdatePage /> : <Navigate to="/signIn" />}
            />

            <Route
              path="/timeTable"
              element={user ? <TimeTablePage /> : <Navigate to="/signIn" />}
            />

              <Route
              path="/viewBusJourneys"
              element={user ? <ViewBusJourneys /> : <Navigate to="/signIn" />}
            />

            


          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
