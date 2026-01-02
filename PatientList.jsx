import React from "react";

function PatientList({ patients, fetchPatients }) {

  const deletePatient = async (id) => {
    await fetch(`http://localhost:/patients/${id}`, {
  method: "DELETE"
});

    fetchPatients();
  };

  return (
    <div>
      <h3>Patient List</h3>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Disease</th>
            <th>Doctor</th>
            <th>Room</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.age}</td>
              <td>{p.gender}</td>
              <td>{p.disease}</td>
              <td>{p.doctor}</td>
              <td>{p.roomNo}</td>
              <td>
                <button onClick={() => deletePatient(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientList;
