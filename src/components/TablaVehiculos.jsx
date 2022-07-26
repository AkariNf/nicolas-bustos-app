export const TablaVehiculos = ({ data, deleteVehiculo }) => {
  const eliminar = (vehiculo) => {
    const confirmar = window.confirm("¿Desea eliminar el registro?");
    if (confirmar) {
      deleteVehiculo(data.filter((y) => y.patente !== vehiculo.patente));
    }
  };

  return (
    <div className="col-8">
      <div className="m-4">
        <h2 className="text-center">Vehiculos Registrados</h2>
        <table className="table table-bordered table-sm">
          <thead className="table-success">
            <tr>
              <th>Patente</th>
              <th>Marca</th>
              <th>Color</th>
              <th>Dueño</th>
              <th>Teléfono</th>
              <th>Dirección</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((vehiculo) => (
              <tr key={vehiculo.patente}>
                <td>{vehiculo.patente}</td>
                <td>{vehiculo.marca}</td>
                <td>{vehiculo.color}</td>
                <td>{vehiculo.nombreDueño}</td>
                <td>{vehiculo.telefono}</td>
                <td>{vehiculo.direccion}</td>
                <td>
                  <button
                    className="btn mx-2 btn-sm btn-outline-danger"
                    onClick={() => eliminar(vehiculo)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
