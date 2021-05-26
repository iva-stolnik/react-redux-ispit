import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const PageDoesNotExist = () => {
  return (
    <div className="text-center">
      <h1 className="my-5">404 - Page not found!</h1>
      <Button className="btn btn-dark">
        <Link to="/" className="text-light text-decoration-none">
          Go back
        </Link>
      </Button>
    </div>
  );
};

export default PageDoesNotExist;
