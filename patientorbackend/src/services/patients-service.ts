import patientsData from '../../data/patients.json';

import { Patient } from '../types';

const patients: Array<Patient> = patientsData as Array<Patient>;

const getPatients = (): Array<Patient> => {
  return patients;
};

export default {
  getPatients,
};
