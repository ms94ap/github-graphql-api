import React from "react";
import { useQuery } from "@apollo/client";
import { GITHUB_PROFILE } from "./queries";

import Profile from "./components/Profile";
import Repositories from "./components/Repositories";
import "../src/css/App.css";
import "../src/css/errors.css";
import CircularProgress from "@material-ui/core/CircularProgress";

function App() {
  const { data, loading, error } = useQuery(GITHUB_PROFILE);
  if (loading) {
    return (
      <div className="spinner">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return { error };
  }

  if (!data.repositoryOwner) {
    return (
      <div className="no-user">
        <img src={require("../src/images/no-user.jpeg")} alt="" />
        <div> Is this what you are looking for? if not try again</div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="header-title"> GITHUB PROFILE</h1>
      <div className="inner-container">
        <Profile data={data} />
        <Repositories data={data} />
      </div>
    </div>
  );
}

export default App;
