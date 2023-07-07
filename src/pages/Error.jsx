import React from "react";
import { Link } from "react-router-dom";

const Error = ({ errMsg }) => {
  return <div className="text-center p-8">
    <h1 className="font-extrabold">404</h1>
    <p>
      {errMsg}
    </p>
    <Link to='/'>
      <button className="button button--action my-8">Home</button>
    </Link>

  </div>;
};

export default Error;
