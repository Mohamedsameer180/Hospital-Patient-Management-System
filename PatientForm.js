import React, { useState } from "react";

function PatientForm({ fetchPatients }) {
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    gender: "",
    disease: "",
    doctor: "",
    roomNo: ""
  });

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  await fetch("http://localhost:3002/patients", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(patient)
});


    fetchPatients();
    setPatient({
      name: "",
      age: "",
      gender: "",
      disease: "",
      doctor: "",
      roomNo: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Patient</h3>
      <input name="name" placeholder="Name" value={patient.name} onChange={handleChange} required />
      <input name="age" placeholder="Age" value={patient.age} onChange={handleChange} required />
      <input name="gender" placeholder="Gender" value={patient.gender} onChange={handleChange} />
      <input name="disease" placeholder="Disease" value={patient.disease} onChange={handleChange} />
      <input name="doctor" placeholder="Doctor" value={patient.doctor} onChange={handleChange} />
      <input name="roomNo" placeholder="Room No" value={patient.roomNo} onChange={handleChange} />
      <button type="submit">Add</button>
    </form>
  );
}

export default PatientForm;
