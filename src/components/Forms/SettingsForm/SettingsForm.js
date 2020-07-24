import React from "react";

import { Field, reduxForm } from "redux-form";

import Btn from "../../Btn/Btn";

import { InputPassword } from "../Inputs";

import {
  requiredInput,
  correctInputLetter,
  correctInputLengthPassword,
  settingsPasswordNewValidate
} from "../validate";

import "./SettingsForm.sass";

let SettingsForm = props => {
  const { handleSubmit } = props;
  return (
    <form className="SettingsForm">
      <h5>Изменить пароль</h5>
      <p className="label">Текущий пароль</p>
      <Field
        name="passwordActual"
        component={InputPassword}
        validate={[
          requiredInput,
          correctInputLetter,
          correctInputLengthPassword
        ]}
        classis="passwordActual"
      />
      <p className="label">Новый пароль</p>
      <Field
        name="passwordNew"
        component={InputPassword}
        validate={[
          requiredInput,
          correctInputLetter,
          correctInputLengthPassword
        ]}
        classis="passwordNew"
      />
      <p className="label">Повторите новый пароль</p>
      <Field
        name="passwordConfirm"
        component={InputPassword}
        validate={[
          requiredInput,
          correctInputLetter,
          correctInputLengthPassword,
          settingsPasswordNewValidate
        ]}
        classis="passwordConfirm"
      />
      <div className="SettingsFormBtns">
        <Btn
          type="btn"
          submit={true}
          title="Сохранить"
          size="medium"
          onClick={handleSubmit.bind(this)}
        />
        <Btn type="link" to="/profile" title="Назад" size="medium" />
      </div>
    </form>
  );
};

SettingsForm = reduxForm({
  form: "SettingsForm"
})(SettingsForm);

export default SettingsForm;
