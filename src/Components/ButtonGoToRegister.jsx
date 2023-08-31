import React from "react";
import Button from "react-bootstrap/Button";
const ButtonGoToRegister = ({ fnIrARegistro }) => {
  return (
    <>
      <Button onClick={fnIrARegistro} variant="success">
        Registarse
      </Button>
    </>
  );
};

export default ButtonGoToRegister;
