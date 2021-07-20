export interface Diagnose {
  code: string;
  name: string;
  latin?: string;
}

export interface DiagnoseArray {
  DiagnoseArray: Array<Diagnose>;
}

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: 'male' | 'female';
  occupation: string;
}

export interface PatientNoSSN {
  id: string;
  name: string;
  dateOfBirth: string;
  gender: 'male' | 'female';
  occupation: string;
}
