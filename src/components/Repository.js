import React from "react";
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";

export default function Repository({ repositoryList }) {
  if (!repositoryList || repositoryList.length <= 0) {
    return null;
  }

  return (
    <div>
      <p>
        <strong>REPOSITORIES: </strong>
      </p>
      <ListGroup>
        {repositoryList.map((repository, index) => (
          <ListGroup.Item key={index}>{repository.name}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

Repository.propTypes = {
  repositoryList: PropTypes.array,
};
