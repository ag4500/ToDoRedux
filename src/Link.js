import React from "react";
import { Button } from "react-bootstrap";
const Link = ({ active, children, onClick }) => {
  if (active) {
    return <Button variant="warning">{children}</Button>;
  }
  return (
    <Button
      variant="outline-primary"
      className="mx-1"
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </Button>
  );
};

export default Link;
