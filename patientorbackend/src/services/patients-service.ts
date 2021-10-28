import patientsData from '../../data/patients.json';

import { Patient } from '../types';

const patients: Array<Patient> = patientsData as Array<Patient>;

const getPatient = (id: string): Patient | undefined => {
  const patient = patients.find((p) => p.id === id);

  return patient ? { ...patient, entries: [] } : undefined;
};

const getPatients = (): Array<Patient> => {
  return patients;
};

export default {
  getPatients,
  getPatient,
};
