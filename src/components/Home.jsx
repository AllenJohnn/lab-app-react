import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div 
      style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        width: "100vw", 
        height: "80vh",
        backgroundColor: "#ffffff",
        margin: "0",
        padding: "0",
        border: "none"
      }}
    >
      <div 
        style={{ 
          textAlign: "center", 
          border: "1px solid #dee2e6", 
          padding: "3rem", 
          borderRadius: "8px",
          backgroundColor: "#ffffff",
          boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
        }}
      >
        <h1 style={{ color: "#212529", marginBottom: "1.5rem" }}>
          Lab Application
        </h1>

        <div>
          <Link to="/add" className="btn btn-primary me-3">
            Add Data
          </Link>

          <Link to="/view" className="btn btn-success">
            View Data
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;