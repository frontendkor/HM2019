import React from "react";

import { Field, reduxForm } from "redux-form";

// import { Button } from "react-materialize";
import Btn from "../../Btn/Btn";

import { InputText, InputPassword, InputPhone } from "../Inputs";

import {
  requiredInput,
  correctInputLengthName,
  correctInputLengthPassword,
  correctInputLetter,
  correctInputPhone,
  requiredInputPhone
} from "../validate";

import "./RegistrationForm.sass";

let RegistrationForm = props => {
  const { handleSubmit } = props;
  return (
    <form className="RegistrationForm">
      <h5>Регистрация</h5>
      <p className="label">Логин</p>
      <Field
        name="login"
        component={InputText}
        validate={[requiredInput, correctInputLengthName, correctInputLetter]}
        classis="login"
        placeholder="Логин"
      />
      <p className="label">Пароль</p>
      <Field
        name="password"
        component={InputPassword}
        validate={[
          requiredInput,
          correctInputLengthPassword,
          correctInputLetter
        ]}
        classis="password"
      />
      <p className="label">Номер телефона</p>
      <Field
        name="phone"
        type="text"
        component={InputPhone}
        mask="+ (375) 999 999 999"
        validate={[requiredInput, correctInputPhone, requiredInputPhone]}
        classis="phone"
      />
      <Btn
        type="submit"
        title="Зарегистрироваться"
        size="medium"
        button={true}
        onClick={handleSubmit.bind(this)}
      />
    </form>
  );
};

RegistrationForm = reduxForm({
  form: "RegistrationForm"
})(RegistrationForm);

export default RegistrationForm;
