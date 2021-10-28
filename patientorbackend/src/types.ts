export interface Diagnose {
  code: string;
  name: string;
  latin?: string;
}

export interface DiagnoseArray {
  DiagnoseArray: Array<Diagnose>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Entry {}

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: 'male' | 'female';
  occupation: string;
  entries: Entry[];
}

export interface PatientNoSSN {
  id: string;
  name: string;
  dateOfBirth: string;
  gender: 'male' | 'female';
  occupation: string;
}

export type PublicPatient = Omit<Patient, 'ssn' | 'entries'>;
