import React, { useEffect, useState } from "react";
import PatientForm from "./components/PatientForm";
import PatientList from "./components/PatientList";

function App() {
  const [patients, setPatients] = useState([]);

  // Fetch patients
 const fetchPatients = async () => {
  const res = await fetch("http://localhost:3002/patients");
  const data = await res.json();
  setPatients(data);
};

  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Hospital Patient Management</h2>
      <PatientForm fetchPatients={fetchPatients} />
      <PatientList patients={patients} fetchPatients={fetchPatients} />
    </div>
  );
}

export default App;
