import React from "react";
import styles from "./App.module.css";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./Auth/PrivateRoute";
import { AuthProvider } from "./Auth/Auth";
import { Nav, Signup, Home, Login } from "./components";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Router>
          <div className={styles.nav}>
            <Nav />
          </div>
          <Switch>
            <Route path="/login" exact component={Login} />
            <PrivateRoute path="/" exact component={Home} />
            <Route path="/signup" exact component={Signup} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;
