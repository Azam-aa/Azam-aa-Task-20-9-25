import React from "react";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="conatiner text=centre mt-5 ms-3">
      <h2 className="mb-4">React Task Navigation</h2>
      <div className="d-grid gap-3 col-6">
        <Link to="/todo" className="btn btn-primary">
          Todo App
        </Link>
        <Link to="/random" className="btn btn-success">
          Random Number
        </Link>
        <Link to="/profile" className="btn btn-info">
          Profile Card
        </Link>
        <Link to="/users" className="btn btn-warning">
          Fetch User
        </Link>
        <Link to="/form" className="btn btn-danger">
          Form Display
        </Link>
      </div>
    </div>
  );
}
export default Home;


