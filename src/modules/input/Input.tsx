// Library
import React from 'react';

// Styles
import styles from './Input.module.scss';

interface InputProps {
  input: string;
  setInput: (input: string) => void;
  id: string;
  placeholder?: string;
  containerClassName?: string;
  fontSize?: string;
  keepPlaceholderOnInput?: boolean;
};

export const Input = ({ 
  input, setInput, id, placeholder, 
  containerClassName, fontSize, keepPlaceholderOnInput = false
}: InputProps) => {

  const onChangeHandler = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => setInput(event.target.value)
    , []
  );

  let placeholderElement;

  if(keepPlaceholderOnInput && placeholder !== undefined) {

    const placeholderContent = input.length < placeholder.length ? 
      ' '.repeat(input.length) + placeholder.substring(input.length, placeholder.length) :
      '';

    placeholderElement = (
      <div>
        <span style={{ fontSize }} aria-hidden>
          {placeholderContent}
        </span>
      </div>
    );
  }

  return (
    <div className={styles.input + (containerClassName ? ' ' + containerClassName : '')}>
      {placeholderElement}
      <input 
        id={id}
        type="text" 
        value={input}
        onChange={onChangeHandler}
        placeholder={placeholder}
        style={{ fontSize }}
      />
    </div>
  );
  }