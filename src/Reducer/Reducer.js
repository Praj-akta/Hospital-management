import { DOCTORS_LIST, PATIENTS_LIST } from "./Action";

export const initialState = {
  doctors: [],
  patients: [],
};

const AdminReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case DOCTORS_LIST:
      return {
        ...state,
        doctors: action.data,
      };
    case PATIENTS_LIST:
      console.log(action.data)
      return {
        ...state,
        patients: action.data,
      };
    default:
      return state;
  }
};

export default AdminReducer;