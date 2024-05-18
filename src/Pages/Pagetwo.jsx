import React, { useState } from 'react';
import './Pagetwo.css';
import { IoMdAdd } from 'react-icons/io';
import { VscFileSubmodule } from 'react-icons/vsc';
import { GoLink } from 'react-icons/go';
import { MdUpload } from 'react-icons/md';
import { FaSortDown } from 'react-icons/fa';

function Pagetwo({ addItem }) {
  const [showButtons, setShowButtons] = useState(false);

  const handleIconClick = () => {
    setShowButtons(!showButtons);
  };

  return (
    <>
      <div className="create-module">
        <div className="cource-buider"><h1>Course Builder..</h1></div>
        <a href="#" className="upload-link" onClick={handleIconClick} style={{ cursor: 'pointer' }}>
          <IoMdAdd size={20} />
          <span>Add</span>
          <FaSortDown size={20} />
        </a>
      </div>
      {showButtons && (
        <div className="button-container">
          <button className="toggle-button" onClick={() => addItem('item1')}><VscFileSubmodule size={20} /> Create Module</button>
          <button className="toggle-button" onClick={() => addItem('item2')}><GoLink size={20} /> Add a link</button>
          <button className="toggle-button" onClick={() => addItem('item3')}><MdUpload size={20} /> Upload</button>
        </div>
      )}
    </>
  );
}

export default Pagetwo;
