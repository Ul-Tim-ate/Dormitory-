import React, { useEffect, useState } from "react";
import { IValidation } from "../../types/IValidation";

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const useValidation = (value: string, validations: IValidation) => {
  const [errorText, setErrorText] = useState("");
  useEffect(() => {
    let hasError = false;
    for (const validation in validations) {
      switch (validation) {
        case "isEmpty":
          if (!value && validations.isEmpty) {
            setErrorText("Поле должно быть заполнено");
            hasError = true;
          }
          break;
        case "minLength":
          if (value.length < validations.minLength) {
            setErrorText(
              `Должно быть не менеe ${validations.minLength} символов`
            );
            hasError = true;
          }
          break;
        case "maxLength":
          if (value.length > validations.maxLength) {
            setErrorText(
              `Должно быть не более ${validations.maxLength} символов`
            );
            hasError = true;
          }
          break;
        case "email":
          if (validations.email) {
            if (validateEmail(value) === null) {
              setErrorText(`Не соответсвует формату почты`);
              hasError = true;
            }
          }
          break;
        default:
          setErrorText("");
          break;
      }
      if (hasError) {
        break;
      }
    }
    if (!hasError) {
      setErrorText("");
    }
  }, [value]);
  return errorText;
};

export default useValidation;
