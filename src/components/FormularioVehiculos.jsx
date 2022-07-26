import { useState } from "react";

export const FormularioVehiculos = ({ addVehiculo }) => {
  const defaultValues = {
    patente: "",
    marca: "",
    color: "",
    nombreDueño: "",
    telefono: "",
    direccion: "",
  };

  const [formValues, setFormValues] = useState(defaultValues);

  const { patente, marca, color, nombreDueño, telefono, direccion } =
    formValues;

  const inputChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const clickEvent = () => {
    addVehiculo(formValues);
    setFormValues({ ...defaultValues });
  };

  return (
    <div className="col-4">
      <div className="card border-success m-4">
        <h2 className="card-header">Registro Vehiculo</h2>
        <div className="container">
          <div className="my-3">
            <label>Patente</label>
            <input
              type="text"
              name="patente"
              className="form-control"
              value={patente}
              onChange={inputChange}
            />
            <label>Marca</label>
            <input
              type="text"
              name="marca"
              className="form-control"
              value={marca}
              onChange={inputChange}
            />
            <label>Color</label>
            <input
              type="text"
              name="color"
              className="form-control"
              value={color}
              onChange={inputChange}
            />
            <label>Nombre completo del dueño</label>
            <input
              type="text"
              name="nombreDueño"
              className="form-control"
              value={nombreDueño}
              onChange={inputChange}
            />
            <label>Teléfono de contacto</label>
            <input
              type="text"
              name="telefono"
              className="form-control"
              value={telefono}
              onChange={inputChange}
            />
            <label>Dirección</label>
            <input
              type="text"
              name="direccion"
              className="form-control"
              value={direccion}
              onChange={inputChange}
            />
            <input
              type="button"
              className="btn btn-outline-primary mt-3"
              onClick={clickEvent}
              value="Guardar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
