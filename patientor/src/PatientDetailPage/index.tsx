import React from 'react';
import { useParams } from 'react-router';

// import { Patient } from '../types';
import { useStateValue } from '../state';

const PatientDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  // dont look
  const [{ patients }] = useStateValue();
  const patient = patients[id];

  console.log(patient, '99999');

  return (
    <div>
      <h1>{patient.name}</h1>
      <p>gender: {patient.gender}</p>
      <p>ssn: {patient.ssn}</p>
      <p>occupation: {patient.occupation}</p>
    </div>
  );
};

export default PatientDetailPage;
