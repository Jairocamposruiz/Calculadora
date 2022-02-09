import {useRef, useState} from 'react';

enum Operators {
  add,
  subtract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');
  const lastOperation = useRef<Operators>();

  const clean = () => {
    setNumber('0');
    setPrevNumber('0');
  };
  const mountNumber = (numberText: string) => {
    if (number.includes('.') && numberText === '.') {
      return;
    }
    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numberText === '.') {
        setNumber(number + numberText);
      } else if (numberText === '0' && number.includes('.')) {
        setNumber(number + numberText);
      } else if (numberText !== '0' && !number.includes('.')) {
        setNumber(numberText);
      } else if (numberText === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + numberText);
      }
    } else {
      setNumber(number + numberText);
    }
  };
  const switchPositiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };
  const deleteLastNumber = () => {
    if (number.length === 1 || (number.includes('-') && number.length === 2)) {
      setNumber('0');
    } else {
      setNumber(number.slice(0, -1));
    }
  };
  const changeNumberToPrev = () => {
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }
    setNumber('0');
  };
  const add = () => {
    changeNumberToPrev();
    lastOperation.current = Operators.add;
  };
  const subtract = () => {
    changeNumberToPrev();
    lastOperation.current = Operators.subtract;
  };
  const multiply = () => {
    changeNumberToPrev();
    lastOperation.current = Operators.multiply;
  };
  const divide = () => {
    changeNumberToPrev();
    lastOperation.current = Operators.divide;
  };
  const calculate = () => {
    const num1 = Number(number);
    const num2 = Number(prevNumber);
    switch (lastOperation.current) {
      case Operators.add:
        setNumber(`${num1 + num2}`);
        break;
      case Operators.subtract:
        setNumber(`${num2 - num1}`);
        break;
      case Operators.multiply:
        setNumber(`${num1 * num2}`);
        break;
      case Operators.divide:
        if (num1 === 0) {
          setNumber(`${num2}`);
        } else {
          setNumber(`${num2 / num1}`);
        }
        break;
      default:
        break;
    }
    setPrevNumber(`${num2}`);
    lastOperation.current = undefined;
  };
  return {
    number,
    prevNumber,
    add,
    subtract,
    multiply,
    divide,
    clean,
    switchPositiveNegative,
    mountNumber,
    calculate,
    deleteLastNumber,
  };
};
