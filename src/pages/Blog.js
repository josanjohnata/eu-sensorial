import React from "react";
import "../style/Blog.css";
import { Nav } from "react-bootstrap";
import { useHistory } from "react-router";

function Blog() {
  const history = useHistory("/eu-sensorial");

  return (
    <div className="blogImg2">
      <Nav.Link
        onClick={() => history.push("/eu-sensorial")}
        className="MenuItems blogItem2"
      >
        INÍCIO
      </Nav.Link>      
    </div>
  );
}

export default Blog;
