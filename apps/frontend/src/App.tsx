import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

import Layout from "./Layout";
import EmployeesPage from "./components/EmployeesPage";
import OrganizationPage from "./components/OrganizationPage";

const App: React.FC = () => {
  return (
    <>
      <SignedOut>
        <div style={{ padding: "40px", textAlign: "center" }}>
          <h2>Please sign in to access the Employee Directory</h2>
          <SignInButton />
        </div>
      </SignedOut>

      <SignedIn>
        <div style={{ padding: "10px" }}>
          <UserButton />
        </div>

        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<EmployeesPage />} />
              <Route path="employees" element={<EmployeesPage />} />
              <Route path="organization" element={<OrganizationPage />} />
            </Route>
          </Routes>
        </Router>
      </SignedIn>
    </>
  );
};

export default App;