import { SET_DOCTORS_LIST, SET_PATIENTS_LIST } from "./Action";

const getDoctorsList = (data) => {
  return {
    type: SET_DOCTORS_LIST,
    data,
  };
};

const getPatientsList = (data) => {
  return {
    type: SET_PATIENTS_LIST,
    data,
  };
};

export { getDoctorsList, getPatientsList };
