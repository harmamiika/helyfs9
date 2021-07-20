import express from 'express';

import patientsService from '../services/patients-service';

const router = express.Router();

router.get('/', (_req, res) => {
  const patients = patientsService.getPatients();
  res.json(patients);
});

export default router;
