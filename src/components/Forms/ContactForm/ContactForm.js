import React from "react";

import { Field, reduxForm } from "redux-form";

import Btn from "../../Btn/Btn";

import { InputText, InputPhone, InputMessage } from "../Inputs";
import LogoutBtn from "../LogoutBtn/LogoutBtn";

import {
  requiredInput,
  correctInputLengthName,
  correctInputPhone,
  requiredInputPhone
} from "../validate";

import "./ContactForm.sass";

let ContactForm = props => {
  const { handleSubmit } = props;
  return (
    <form className="ContactForm">
      <p className="label">Кто будет получать заказ?</p>
      <Field
        name="name"
        component={InputText}
        validate={[requiredInput, correctInputLengthName]}
        classis="name"
        placeholder="Имя"
      />
      <p className="label">Телефон</p>
      <Field
        name="phone"
        type="text"
        component={InputPhone}
        mask="+ (375) 999 999 999"
        validate={[requiredInput, correctInputPhone, requiredInputPhone]}
        classis="phone"
      />
      <p className="label">Телефон 2</p>
      <Field
        name="phone2"
        type="text"
        component={InputPhone}
        mask="+ (375) 999 999 999"
        validate={correctInputPhone}
        classis="phone"
      />
      <p className="label">Адрес</p>
      <Field
        name="street"
        component={InputText}
        validate={[requiredInput]}
        classis="street"
        placeholder="Улица"
      />
      <Field
        name="home"
        component={InputText}
        validate={[requiredInput]}
        classis="home"
        placeholder="Дом"
      />
      <Field
        name="apartment"
        component={InputText}
        validate={[requiredInput]}
        classis="apartment"
        placeholder="Номер квартиры"
      />
      <p className="label">Коментарий к заказу</p>
      <Field
        name="message"
        component={InputMessage}
        classis="message"
        placeholder="..."
      />
      <div className="ContactFormBtns">
        <Btn
          type="submit"
          title="Подтвердить заказ"
          size="medium"
          button={true}
          onClick={handleSubmit.bind(this)}
        />
        <LogoutBtn />
      </div>
    </form>
  );
};

ContactForm = reduxForm({
  form: "ContactForm"
})(ContactForm);

export default ContactForm;
