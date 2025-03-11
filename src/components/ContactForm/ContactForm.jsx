import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+40');

  const countryCodes = [
    { code: '+40', country: 'RO' },
    { code: '+49', country: 'DE' },
    { code: '+33', country: 'FR' },
    { code: '+39', country: 'IT' },
    { code: '+34', country: 'ES' },
    { code: '+44', country: 'UK' },
    { code: '+43', country: 'AT' },
    { code: '+32', country: 'BE' },
    { code: '+359', country: 'BG' },
    { code: '+385', country: 'HR' },
    { code: '+357', country: 'CY' },
    { code: '+420', country: 'CZ' },
    { code: '+45', country: 'DK' },
    { code: '+372', country: 'EE' },
    { code: '+358', country: 'FI' },
    { code: '+30', country: 'GR' },
    { code: '+36', country: 'HU' },
    { code: '+354', country: 'IS' },
    { code: '+353', country: 'IE' },
    { code: '+370', country: 'LT' },
    { code: '+371', country: 'LV' },
    { code: '+352', country: 'LU' },
    { code: '+356', country: 'MT' },
    { code: '+31', country: 'NL' },
    { code: '+47', country: 'NO' },
    { code: '+48', country: 'PL' },
    { code: '+351', country: 'PT' },
    { code: '+423', country: 'LI' },
    { code: '+386', country: 'SI' },
    { code: '+421', country: 'SK' },
    { code: '+46', country: 'SE' },
    { code: '+41', country: 'CH' },
    { code: '+380', country: 'UA' },
  ];

  const handleNameChange = (e) => setName(e.target.value);
  const handleNumberChange = (e) => setNumber(e.target.value);
  const handleCountryChange = (e) => setCountryCode(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedNumber = `${countryCode} ${number.trim().replace(/^0+/, '')}`;

    onSubmit({ id: nanoid(), name, number: formattedNumber });

    setName('');
    setNumber('');
    setCountryCode('+40');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputGroup}>
        <label htmlFor="name" className={styles.label}></label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter full name"
          value={name}
          onChange={handleNameChange}
          required
          className={styles.input}
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="number" className={styles.label}></label>
        <div className={styles.numberInputContainer}>
          <select
            name="countryCode"
            value={countryCode}
            onChange={handleCountryChange}
            className={styles.select}
          >
            {countryCodes.map(({ code, country }) => (
              <option key={code} value={code}>
                {country} {code}
              </option>
            ))}
          </select>

          <input
            type="tel"
            name="number"
            id="number"
            placeholder="Enter phone number"
            value={number}
            onChange={handleNumberChange}
            pattern="\d{6,15}"
            title="Phone number must contain only digits."
            required
            className={styles.numberInput}
          />
        </div>
      </div>

      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;