import { DOCTORS_LIST, PATIENTS_LIST, SET_USER_DETAILS } from "./Action";

const getDoctorsList = (data) => {
  return {
    type: DOCTORS_LIST,
    data,
  };
};

const getPatientsList = (data) => {
  return {
    type: PATIENTS_LIST,
    data,
  };
};

const setUserDetails = (data) => {
  return {
    type: SET_USER_DETAILS,
    data,
  };
};

export { getDoctorsList, getPatientsList, setUserDetails };
