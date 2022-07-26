import { useEffect, useState } from "react";
import { FormularioVehiculos } from "./components/FormularioVehiculos";
import { TablaVehiculos } from "./components/TablaVehiculos";

const vehiculos = () => {
  return JSON.parse(localStorage.getItem("Vehiculos")) || [];
};

export const RegistroApp = () => {
  const [value, setValue] = useState(vehiculos);

  const agregarVehiculo = (registro) => {
    if (value.filter((x) => x.patente === registro.patente).length > 0)
      return alert("La patente ingresada ya existe!");
    setValue([registro, ...value]);
  };

  const eliminarVehiculo = (registro) => {
    setValue([...registro]);
  };

  useEffect(() => {
    localStorage.setItem("Vehiculos", JSON.stringify(value));
  }, [value]);

  return (
    <>
      <div className="row">
        <div className="text-center bg-success text-white">
          <h1 className="m-5">Vehiculos</h1>
        </div>
        <TablaVehiculos data={value} deleteVehiculo={eliminarVehiculo} />
        <FormularioVehiculos addVehiculo={agregarVehiculo} />
      </div>
    </>
  );
};
