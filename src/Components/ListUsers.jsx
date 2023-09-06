import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import withReactContent from "sweetalert2-react-content";
import { FaUserEdit } from "react-icons/fa";
import ModalUsers from "./ModalUsers";
import Swal from "sweetalert2";

const ListUsers = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const MySwal = withReactContent(Swal);

  const [selected, setSelected] = useState({});

  //Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (elemento) => {
    setShow(true);
    setSelected(elemento);
  };

  const handleUsers = async () => {
    await axios
      .get("http://89.116.25.43:3500/api/usuarios/listar", {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((resp) => {
        console.log(resp);
        setData(resp.data.usuarios);
      })
      .catch((error) => {
        if (error.response.status === 400) {
          Swal.fire("Informacion!", error.response.data.message, "error");
        } else if (error.response.status === 401) {
          Swal.fire("Informacion!", error.response.data.message, "error");
        } else {
          Swal.fire("Informacion!", "Ocurrio un error", "error");
        }
      });
  };

  useEffect(() => {
    handleUsers();
  }, []);

  const handleDelete = (element) => {
    MySwal.fire({
      title: `¿Está seguro de Eliminar a ${element.usuario}?, Esta acción es irreversible!`,
      showCancelButton: true,
      confirmButtonText: "Si",
    }).then(async (result) => {
      if (result.isConfirmed) {
        //Accion en caso de que elijan el SI
        await axios
          .delete(
            "http://89.116.25.43:3500/api/usuarios/eliminar/" + element._id,
            {
              headers: { Authorization: `bearer ${token}` },
            }
          )
          .then((resp) => {
            Swal.fire("Información!", resp.data.message, "success");
            handleUsers();
          })
          .catch((err) => {
            console.log(err);
            if (err.response.status == 400) {
              Swal.fire("Información!", err.response.data.message, "error");
            } else if (err.response.status == 401) {
              Swal.fire("Información!", err.response.data.message, "error");
            } else {
              Swal.fire("Información!", "Ocurrio un error!", "error");
            }
          });
      }
    });
  };
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Email</th>
            <th>Usuario</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => {
            return (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.nombres}</td>
                <td>{user.apellidos}</td>
                <td>{user.email}</td>
                <td>{user.usuario}</td>
                <td>
                  <Button
                    variant="primary"
                    className="w-10 mr-1"
                    onClick={() => handleShow(user)}
                  >
                    <FaUserEdit />
                  </Button>
                  <Button
                    variant="danger"
                    className="w-10"
                    onClick={() => handleDelete(user)}
                  >
                    <MdDelete />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <ModalUsers
        show={show}
        handleClose={handleClose}
        user={selected}
        getUser={handleUsers}
      />
    </div>
  );
};

export default ListUsers;
