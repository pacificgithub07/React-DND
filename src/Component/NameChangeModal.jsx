import React, { useState } from 'react';

function NameChangeModal({ itemName, onChange, onClose }) {
  const [newName, setNewName] = useState(itemName);

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const handleSubmit = () => {
    onChange(newName);
    onClose(); 
  };
  
  return (
    <div className="modal">
      <input type="text" value={newName} onChange={handleChange} />
      <button onClick={handleSubmit}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}

export default NameChangeModal;
