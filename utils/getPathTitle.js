const getPathTitle = (path) => {
  if (path === "/profile/dashboard") {
    return "Dashboard";
  } else if (path === "/profile/appointment") {
    return "Appointments";
  } else if (
    path === "/profile/bookappointment" ||
    path === "/profile/appointmentsuccessful" ||
    path.includes("/profile/updateappointment")
  ) {
    return "Book Appointments";
  } else if (path === "/profile/record") {
    return "Medical Records";
  } else if (path === "/profile" || path === "/profile/update") {
    return "";
  }
};

export default getPathTitle;
