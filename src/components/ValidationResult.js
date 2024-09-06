import React from 'react';
//validation component 
function ValidationResult({ isSorted }) {
  return (
    <div>
      <h2>Validation Result</h2>
      {isSorted ? (
        <p style={{ color: 'green' }}>The articles are sorted correctly!</p>
      ) : (
        <p style={{ color: 'red' }}>The articles are NOT sorted correctly!</p>
      )}
    </div>
  );
}

export default ValidationResult;
