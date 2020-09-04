import React from "react";
import "../css/profile.css";

function Profile({ data }) {
  const profile = data.repositoryOwner;
  return (
    <div className="profile-container">
      <div className="profile-container-inner">
        <div className="profile-img-container">
          <a href={`${profile.url}`} target="_">
            <img src={profile.avatarUrl} alt="" className="profile-avatar" />
          </a>
        </div>
        <div className="profile-details">
          {profile.name && <div className="profile-name">{profile.name}</div>}

          <div className="profile-nickname">{profile.login}</div>
          {profile.bio && <div>{profile.bio}</div>}

          <div className="profile-repositories">
            Public Repositories:
            {profile.repositories.edges ? profile.repositories.totalCount : 0}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
