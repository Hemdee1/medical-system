export const formatUpdateInput = (formRef, user) => {
  formRef.current.firstName.value = user.firstName ? user.firstName : "";
  formRef.current.lastName.value = user.lastName ? user.lastName : "";
  formRef.current.email.value = user.email ? user.email : "";
  formRef.current.mobileNo.value = user.mobileNo ? user.mobileNo : "";
  formRef.current.dateOfBirth.value = user.dateOfBirth ? user.dateOfBirth : "";
  formRef.current.gender.value = user.gender ? user.gender : "";
  formRef.current.address.value = user.address ? user.address : "";
  formRef.current.state.value = user.state ? user.state : "";
  formRef.current.height.value = user.height ? user.height : "";
  formRef.current.weight.value = user.weight ? user.weight : "";
  formRef.current.bloodGroup.value = user.bloodGroup ? user.bloodGroup : "";

  const allergies = user?.allergies ? user?.allergies.join(",") : "";
  formRef.current.allergies.value = allergies;
};
