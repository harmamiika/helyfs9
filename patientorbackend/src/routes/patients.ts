import express from 'express';

import patientsService from '../services/patients-service';

const router = express.Router();

router.get('/', (_req, res) => {
  const patients = patientsService.getPatients();
  res.json(patients);
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const patient = patientsService.getPatient(id);
  return patient ? res.json(patient) : res.sendStatus(404);
});

export default router;
