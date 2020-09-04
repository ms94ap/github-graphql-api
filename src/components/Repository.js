import React from "react";
import moment from "moment";
import Scoring from "./Scoring";
import "../css/repositories.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import EventIcon from "@material-ui/icons/Event";

export default class Repository extends React.Component {
  render() {
    const { repo, selectType } = this.props;
    const dateField = moment(repo.node.createdAt).utc().format("DD/MM/YYYY");
    const starCounts = repo.node.stargazers.totalCount;
    const forkCounts = repo.node.forkCount;

    return (
      <div className="single-repo-container">
        <div className="single-repo-inner-container">
          <div className="single-repo-inner-upper">
            <GitHubIcon fontSize="small" className="single-repo-github" />
            <a
              href={`${repo.node.url}`}
              target="_"
              className="single-repo-name"
            >
              {repo.node.name}
            </a>
          </div>
          <div className="single-repo-inner-lower">
            <Scoring starCounts={starCounts} forkCounts={forkCounts} />
            {selectType === "totalCount" ? (
              <div className="single-repo-selection">
                <StarBorderIcon fontSize="small" />
                <div className="single-repo-star-rating">{starCounts}</div>
              </div>
            ) : (
              <div className="single-repo-selection">
                <EventIcon fontSize="small" />
                <div>{dateField}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
