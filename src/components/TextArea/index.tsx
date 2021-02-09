import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface IPropsInput {
  name: string;
  placeholder?: string;
}

const TextArea: React.FC<IPropsInput> = ({
  name,
  placeholder = '',
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
      <textarea
        name={name}
        ref={inputRef}
        placeholder={placeholder}
        {...rest}
      />
    </Container>
  );
};

export default TextArea;
