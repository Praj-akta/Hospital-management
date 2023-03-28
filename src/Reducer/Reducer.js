import { SET_APPOINTMENTS_LIST, SET_DOCTORS_LIST, SET_PATIENTS_LIST } from "./Action";
import { CgProfile } from "react-icons/cg";
import { GiNotebook } from "react-icons/gi";
import { TbReportSearch } from "react-icons/tb";
import { BsCalendar2WeekFill } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";
import { MdManageSearch } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";

export const initialState = {
  doctors: [],
  patients: [],
  appointments: [],
  userMenuItems: [
    { name: "Profile", url: "/profile", iconName: <CgProfile /> },
    { name: "Appointments", url: "/appointments", iconName: <GiNotebook /> },
    {
      name: "Book Appointment",
      url: "/book-appointment",
      iconName: <BsCalendar2WeekFill />,
    },
    { name: "Lab Tests", url: "/lab-tests", iconName: <TbReportSearch /> },
    // { name: "Lab Reports", url: "/user", iconName: <TbReportSearch /> },
  ],
  doctorMenuItems: [
    {
      name: "Appointments",
      url: "/doctor-dashboard/appointments",
      iconName: <MdWorkOutline />,
    },
    {
      name: "Patients Details",
      url: "/doctor-dashboard/patients-details",
      iconName: <BiCommentDetail />,
    },
    { name: "Search", url: "/doctor-dashboard", iconName: <MdManageSearch /> },
  ],
};

const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DOCTORS_LIST:
      return {
        ...state,
        doctors: action.data,
      };
    case SET_PATIENTS_LIST:
      return {
        ...state,
        patients: action.data,
      };
    case SET_APPOINTMENTS_LIST:
      return {
        ...state,
        appointments: action.data,
      };
    default:
      return state;
  }
};

export default AdminReducer;
