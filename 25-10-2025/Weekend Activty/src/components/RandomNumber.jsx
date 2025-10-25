import React, { useState } from 'react';

const RandomNumber = () => {
  const [num, setNum] = useState(0);

  const generate = () => setNum(Math.floor(Math.random() * 100) + 1);

  return (
    <div className="container text-center mt-5">
      <h3>Random Number Generator</h3>
      <p className="display-4">{num}</p>
      <button onClick={generate} className="btn btn-success">Generate</button>
    </div>
  );
};

export default RandomNumber;
