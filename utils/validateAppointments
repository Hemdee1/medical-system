const validateAppointments = (appointments) => {
  return appointments
    .map((appointment) => {
      if (
        appointment.status === "cancelled" ||
        appointment.status === "rescheduled"
      )
        return appointment;

      const date = appointment.date;
      if (new Date(date).getTime() + 86400000 < Date.now()) {
        return { ...appointment, status: "completed" };
      }
      return appointment;
    })
    .reverse();
};

export default validateAppointments;
