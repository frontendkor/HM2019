import React from "react";
import InputMask from "react-input-mask";

import { TextInput, Textarea } from "react-materialize";

import "./Inputs.sass";

const InputText = props => {
  const { input, meta, classis, placeholder } = props;
  return (
    <div className={classis}>
      <TextInput {...input} placeholder={placeholder} />
      {meta.error && meta.touched && <div className="error">{meta.error}</div>}
    </div>
  );
};

const InputMessage = props => {
  const { input, meta, classis, placeholder } = props;
  return (
    <div className={classis}>
      <Textarea {...input} placeholder={placeholder} />
      {meta.error && meta.touched && <div className="error">{meta.error}</div>}
    </div>
  );
};

const InputPhone = props => {
  const { input, meta, classis, mask } = props;
  return (
    <div className={classis}>
      <InputMask {...input} type="text" mask={mask} alwaysShowMask={true} />
      {meta.error && meta.touched && <div className="error">{meta.error}</div>}
    </div>
  );
};

const InputPassword = props => {
  const { input, meta, classis } = props;
  return (
    <div className={classis}>
      <TextInput {...input} password placeholder="Пароль" />
      {meta.error && meta.touched && <div className="error">{meta.error}</div>}
    </div>
  );
};

export { InputPassword, InputText, InputPhone, InputMessage };
