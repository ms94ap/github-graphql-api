import React, { useState } from "react";
import Repository from "./Repository";
import Pagination from "./Pagination";
import Select from "./Select";
import "../css/repositories.css";

function Repositories({ data }) {
  const [selectType, setSelectType] = useState("totalCount");
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(4);

  const repos = data.repositoryOwner.repositories.edges;

  const repoSort =
    repos &&
    [...repos].sort((a, b) => {
      if (selectType === "totalCount") {
        if (a.node.stargazers.totalCount < b.node.stargazers.totalCount)
          return 1;
        if (a.node.stargazers.totalCount > b.node.stargazers.totalCount)
          return -1;
        return 0;
      } else {
        if (a.node.createdAt < b.node.createdAt) return 1;
        if (a.node.createdAt > b.node.createdAt) return -1;
        return 0;
      }
    });

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repoSort.slice(indexOfFirstRepo, indexOfLastRepo);

  const repoList = currentRepos.map((repo, index) => {
    return (
      <li key={index} className="repos-item">
        <Repository repo={repo} selectType={selectType} />
      </li>
    );
  });

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="repos-container">
      <Select selectType={selectType} setSelectType={setSelectType} />

      <ul className="repos-list">{repoList}</ul>
      {(repos && repos.length) > reposPerPage && (
        <Pagination
          reposPerPage={reposPerPage}
          totalRepos={repos.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      )}
    </div>
  );
}

export default Repositories;
