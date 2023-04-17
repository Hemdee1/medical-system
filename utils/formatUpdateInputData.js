export const formatUpdateInputData = (formRef, user, img) => {
  const firstName = formRef.current.firstName.value.trim();
  const lastName = formRef.current.lastName.value.trim();
  const email = formRef.current.email.value.trim();
  const mobileNo = formRef.current.mobileNo.value.trim();
  const dateOfBirth = formRef.current.dateOfBirth.value.trim();
  const gender = formRef.current.gender.value.trim();
  const address = formRef.current.address.value.trim();
  const state = formRef.current.state.value.trim();
  const height = formRef.current.height.value.trim();
  const weight = formRef.current.weight.value.trim();
  const bloodGroup = formRef.current.bloodGroup.value.trim();
  const allergies = formRef.current.allergies.value.split(",");
  let image = user?.img ? user?.img : "";

  if (img) {
    image = img;
  }

  const data = {
    firstName,
    lastName,
    email,
    mobileNo,
    dateOfBirth,
    gender,
    address,
    state,
    height,
    weight,
    bloodGroup,
    allergies,
    img: image,
  };

  return data;
};
