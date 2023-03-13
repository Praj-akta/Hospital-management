import { DOCTORS_LIST, PATIENTS_LIST, SET_USER_DETAILS } from "./Action";
import { CgProfile } from "react-icons/cg";
import { GiNotebook } from "react-icons/gi";
import { TbReportSearch } from "react-icons/tb";
import { BsCalendar2WeekFill } from "react-icons/bs";

export const initialState = {
  doctors: [],
  patients: [],
  currentUser: {},
  userMenuItems: [
    { name: "Profile", url: "/profile", iconName: <CgProfile /> },
    { name: "Appointments", url: "/user", iconName: <GiNotebook /> },
    {
      name: "Book Appointment",
      url: "/book-appointment",
      iconName: <BsCalendar2WeekFill />,
    },
    { name: "Lab Reports", url: "/user", iconName: <TbReportSearch /> },
  ],
};

const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case DOCTORS_LIST:
      return {
        ...state,
        doctors: action.data,
      };
    case PATIENTS_LIST:
      return {
        ...state,
        patients: action.data,
      };
    case SET_USER_DETAILS:
      return {
        ...state,
        currentUser: action.data
      }
    default:
      return state;
  }
};

export default AdminReducer;