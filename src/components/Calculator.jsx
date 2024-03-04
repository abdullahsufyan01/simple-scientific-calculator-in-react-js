import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    setDisplay((prevDisplay) => prevDisplay + value);
  };

  const handleClear = () => {
    setDisplay('');
  };

  const handleCalculate = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={handleClear} className="clear">C</button>
        <button onClick={() => handleClick('/')} className="operator">/</button>
        <button onClick={() => handleClick('*')} className="operator">*</button>
        <button onClick={() => handleClick('Math.sqrt(')} className="operator">√</button>
        <button onClick={() => handleClick('Math.pow(')} className="operator">^</button>
        <button onClick={() => handleClick('Math.sin(')} className="operator">sin</button>
        <button onClick={() => handleClick('Math.cos(')} className="operator">cos</button>
        <button onClick={() => handleClick('Math.tan(')} className="operator">tan</button>
        <button onClick={() => handleClick('Math.log(')} className="operator">log</button>
        <button onClick={() => handleClick('Math.exp(')} className="operator">exp</button>
        <button onClick={() => handleClick('Math.PI')} className="operator">π</button>
        <button onClick={() => handleClick('Math.E')} className="operator">e</button>
        <button onClick={() => handleClick('Math.abs(')} className="operator">|x|</button>
        <button onClick={() => handleClick('Math.floor(')} className="operator">floor</button>
        <button onClick={() => handleClick('Math.ceil(')} className="operator">ceil</button>
        <button onClick={() => handleClick('Math.round(')} className="operator">round</button>
        <button onClick={() => handleClick('Math.max(')} className="operator">max</button>
        <button onClick={() => handleClick('Math.min(')} className="operator">min</button>
        <button onClick={() => handleClick('(')}>(</button>
        <button onClick={() => handleClick(')')}>)</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('-')} className="operator">-</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('+')} className="operator">+</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={handleCalculate} className="equal">=</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')} className="operator">.</button>
      </div>
    </div>
  );
};

export default Calculator;
