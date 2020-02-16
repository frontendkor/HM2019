export const ADD_PHONE = "LOGIN";

const addPhone = (phone1, phone2) => {
  return {
    type: ADD_PHONE,
    payload: {
      phone1: phone1,
      phone2: phone2
    }
  };
};

export default addPhone;
