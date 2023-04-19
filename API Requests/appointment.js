import axios from "axios";

const axiosInstance = axios.create({
  withCredentials: true,
});

export const GetAllApointments = async () => {
  const result = await axiosInstance.get("/api/appointment");
  return result.data;
};

export const GetSingleApointment = async (id) => {
  const result = await axiosInstance.get("/api/appointment/" + id);
  return result.data;
};

// APPOINTMENT DATA
// hospital
// doctor
// title
// date
// time
// status
export const CreateApointment = async (data) => {
  const result = await axiosInstance.post("/api/appointment/create", data);
  return result.data;
};

export const UpdateApointment = async (data, id) => {
  const result = await axiosInstance.patch(
    "/api/appointment/update/" + id,
    data
  );
  return result.data;
};

export const DeleteApointment = async (id) => {
  const result = await axiosInstance.delete("/api/appointment/delete/" + id);
  return result.data;
};
