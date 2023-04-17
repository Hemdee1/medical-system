import axios from "axios";

const axiosInstance = axios.create({
  withCredentials: true,
});

export const getLoggedInUser = async () => {
  const result = await axiosInstance.get("/api/user");
  return result.data;
};

// LoginData = {
//   email: "hemdee@gmail.com",
//   password: "hemdee",
// };
export const LogIn = async (data) => {
  const result = await axiosInstance.post("/api/user/login", data);
  return result.data;
};

// SignupData = {
//   email: "hemdee@gmail.com",
//   firstName: 'John',
//   lastName: 'Doe',
//   password: "hemdee",
// };
export const SignUp = async (data) => {
  const result = await axiosInstance.post("/api/user/signup", data);
  return result.data;
};

// PROFILE DATAS
// firstName
// lastName
// email
// mobileNo
// dateOfBirth
// gender
// img : Blob file of the image
// address
// state
// height
// weight
// bloodGroup
// allergies : [Array]

export const UpdateProfile = async (data) => {
  const result = await axiosInstance.patch("/api/user/update", data);
  return result.data;
};

export const Logout = async () => {
  const result = await axiosInstance.post("/api/user/logout");
  return result.data;
};
