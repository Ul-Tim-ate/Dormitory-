import React, { useState } from 'react'
import { IValidation } from '../../types/IValidation';
import useValidation from '../use-validation/use-validation';

const useInput = (initialState: string, validations: IValidation) => {
  const [value, setValue] = useState<string>(initialState);
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const error = useValidation(value, validations);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    error,
  };
};

export default useInput