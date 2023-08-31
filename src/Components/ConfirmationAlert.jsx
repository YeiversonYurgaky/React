import React from "react";
import Swal from "sweetalert2";

function ConfirmationAlert() {
  const showSuccessAlert = () => {
    Swal.fire({
      title: "¡Registro Exitoso!",
      text: "Te has registrado satisfactoriamente.",
      icon: "success",
      confirmButtonText: "Entendido",
    });
  };

  return showSuccessAlert();
}

export default ConfirmationAlert;
