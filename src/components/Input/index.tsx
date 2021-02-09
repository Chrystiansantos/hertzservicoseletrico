import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface IPropsInput {
  name: string;
  placeholder?: string;
  styleInline?: any;
}

const Input: React.FC<IPropsInput> = ({
  name,
  placeholder = '',
  styleInline = {},
  ...rest
}) => {
  const inputRef = useRef(null);
  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: ref => {
        return ref.value;
      },
      ref: inputRef.current,
    });
  }, [registerField, fieldName]);

  return (
    <Container>
      <input
        style={styleInline}
        name={name}
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        {...rest}
      />
    </Container>
  );
};

export default Input;
