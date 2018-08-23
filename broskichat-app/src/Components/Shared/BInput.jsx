import React from 'react';

const BInput = (props) => {
  return (
    <div className="field">
      <p className="control">
        <input 
          id={props.id}
          className="input" 
          type={props.type} 
          placeholder={props.placeholder}
          value={props.value} 
          onChange={props.handleChange} />
      </p>
    </div>
  );
}

export default BInput;