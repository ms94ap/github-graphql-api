import React from "react";

export default class Scoring extends React.Component {
  render() {
    const { forkCounts, starCounts } = this.props;

    const ratio = forkCounts / starCounts;
    const scoreRatio = Math.round(ratio * 100) / 100;
    let score;
    if (!scoreRatio) {
      score = 1;
    } else if (scoreRatio && scoreRatio <= 0.1) {
      score = 2;
    } else if (scoreRatio > 0.1 && scoreRatio <= 0.2) {
      score = 3;
    } else {
      score = 4;
    }
    return <div>Score: {score}</div>;
  }
}
