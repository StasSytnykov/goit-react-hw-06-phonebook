import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import style from './ContactForm.module.css';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onChangeInput = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const onSubmitForm = event => {
    event.preventDefault();
    onSubmit({
      name: name,
      number: number,
      id: nanoid(),
    });

    reset(event);
  };

  const reset = event => {
    setName('');
    setNumber('');
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={onSubmitForm}>
      <label className={style.label}>
        Name
        <input
          className={style.input}
          value={name}
          type="text"
          name="name"
          required
          onChange={onChangeInput}
        />
      </label>

      <label className={style.label}>
        Number
        <input
          className={style.input}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onChangeInput}
        />
      </label>

      <button className={style.button} type="submit">
        Add Contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
