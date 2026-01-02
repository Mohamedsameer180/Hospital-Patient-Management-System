const express = require('express');
const router = express.Router();

// In-memory patient data
let patients = [
  {
    id: 1,
    name: "Ramesh",
    age: 45,
    gender: "Male",
    disease: "Diabetes",
    doctor: "Dr. Kumar",
    roomNo: 201
  },
  {
    id: 2,
    name: "Sita",
    age: 32,
    gender: "Female",
    disease: "Fever",
    doctor: "Dr. Priya",
    roomNo: 105
  }
];

// READ – Get all patients
router.get('/', (req, res) => {
  res.json(patients);
});

// READ – Get patient by ID
router.get('/:id', (req, res) => {
  const patient = patients.find(p => p.id === parseInt(req.params.id));
  if (!patient) {
    return res.status(404).json({ message: "Patient not found" });
  }
  res.json(patient);
});

// CREATE – Add new patient
router.post('/', (req, res) => {
  const newPatient = {
    id: patients.length + 1,
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    disease: req.body.disease,
    doctor: req.body.doctor,
    roomNo: req.body.roomNo
  };

  patients.push(newPatient);
  res.status(201).json(newPatient);
});

// UPDATE – Update patient details
router.put('/:id', (req, res) => {
  const patient = patients.find(p => p.id === parseInt(req.params.id));
  if (!patient) {
    return res.status(404).json({ message: "Patient not found" });
  }

  patient.name = req.body.name || patient.name;
  patient.age = req.body.age || patient.age;
  patient.gender = req.body.gender || patient.gender;
  patient.disease = req.body.disease || patient.disease;
  patient.doctor = req.body.doctor || patient.doctor;
  patient.roomNo = req.body.roomNo || patient.roomNo;

  res.json(patient);
});

// DELETE – Remove patient
router.delete('/:id', (req, res) => {
  patients = patients.filter(p => p.id !== parseInt(req.params.id));
  res.json({ message: "Patient removed successfully" });
});

// EXPORT ROUTER (CRITICAL)
module.exports = router;
