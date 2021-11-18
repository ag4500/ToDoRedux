import React from "react";
import FilterLink from "./FilterLink";
const Footer = () => (
  <div className="container">
    <span className="fst-italic">Show Activity</span> :{"  "}
    <FilterLink filter="ShowAll">All</FilterLink>
    {"   "}
    <FilterLink filter="ShowActive">Active</FilterLink>
    {"   "}
    <FilterLink filter="ShowCompleted">Completed</FilterLink>
  </div>
);

export default Footer;
