import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import CreateRaveForm from "./components/CreateRaveForm";
import RavePage from './components/RavePage'
import RavesList from './components/RavesList'
import EditRaveForm from "./components/EditRaveForm";
import DeleteRaveConfirmPage from "./components/DeleteRaveConfirmPage";
import DeleteReviewConfirmPage from "./components/DeleteReviewConfirmPage";
import Footer from './components/Footer';


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Navigation isLoaded={isLoaded} />
        {isLoaded && (
          <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/raves">
                <RavesList />
              </Route>
              <Route exact path="/raves/new">
                <CreateRaveForm />
              </Route>
              <Route exact path="/raves/:id">
                <RavePage />
              </Route>
              <Route exact path="/raves/:id/edit">
                <EditRaveForm />
              </Route>
              <Route exact path="/raves/:id/delete">
                <DeleteRaveConfirmPage />
              </Route>
              <Route exact path="/reviews/:id/delete">
                <DeleteReviewConfirmPage />
              </Route>
              <Route path="/signup">
                <SignupFormPage />
              </Route>
          </Switch>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
