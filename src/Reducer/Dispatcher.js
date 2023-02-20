import { DOCTORS_LIST, PATIENTS_LIST } from "./Action";

const getDoctorsList = (data) => {
  return {
    type: DOCTORS_LIST,
    data
  };
};

const getPatientsList = (data) => {
  return {
    type: PATIENTS_LIST,
    data
  };
};

export { getDoctorsList, getPatientsList };