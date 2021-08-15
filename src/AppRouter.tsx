import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Sidebar } from "./components/shared/Sidebar";
import { CreateUser } from "./components/User";

import Login from "./pages/Login";
import Users from "./pages/Users";
import { ErrorPage } from "./pages/ErrorPage";

import { UserContextProvider } from "./context/UserContext";

export const AppRouter = () => {
  return (
    <UserContextProvider>
      <Suspense fallback={null}>
        <Router>
          <Sidebar />
          <div id="content" className="bg-grey w-100">
          <Switch>
            <Route exact path="/usuarios" component={Users} />
            <Route path="/login" component={Login} />
            <Route path="/crear" component={CreateUser} />
            <Route component={ErrorPage} />
          </Switch>
          </div>
        </Router>
      </Suspense>
    </UserContextProvider>
  );
};
