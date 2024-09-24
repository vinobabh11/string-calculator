import React, { useState } from 'react';
import { add } from '../../utils/stringCalculator';
import styles from './index.module.css';
import Result from '../Result';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const calculation = add(input);
      setResult(calculation);
      setError('');
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <div className={styles.calculator}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter numbers..."
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Calculate</button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
      {result !== null && <Result result={result} />}
    </div>
  );
};

export default Calculator;