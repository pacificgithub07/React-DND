import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Pagetwo from '../Pages/Pagetwo';
import DraggableItem from '../Component/DraggableItem';
import DropTarget from '../Component/DropTarget';
import './First.css';
import { IoIosPlayCircle } from 'react-icons/io';
import { CiLink } from 'react-icons/ci';
import { BsFilePdf } from 'react-icons/bs';
import { MdMoreVert, MdDelete, MdEdit } from 'react-icons/md';
import NameChangeModal from '../Component/NameChangeModal'; // Import the new component

function First() {
  const [droppedItems, setDroppedItems] = useState([]);
  const [availableItems, setAvailableItems] = useState([
    { id: 'item1', type: 'ITEM', name: 'Introduction to Course', content: <><BsFilePdf size={40} /><div><h3>Introduction to Course</h3><p>PDF</p></div></> },
    { id: 'item2', type: 'ITEM', name: 'Understanding to Trigonometry', content: <><CiLink size={40} /><div><h3>Understanding to Trigonometry</h3><p>Link</p></div></> },
  ]);
  const [showOptions, setShowOptions] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [newItemName, setNewItemName] = useState('');

  const handleDrop = (item) => {
    const droppedItem = availableItems.find((availableItem) => availableItem.id === item.id);
    setDroppedItems((prevItems) => [...prevItems, droppedItem]);
    setAvailableItems((prevItems) => prevItems.filter((availableItem) => availableItem.id !== item.id));
  };

  const addNewItem = (type) => {
    const newItemId = `item${availableItems.length + 1}`;
    let newItemContent = null;

    if (type === 'item1') {
      newItemContent = (
        <>
          <IoIosPlayCircle size={40} />
          <div>
            <h3>{newItemName || 'New Module'}</h3>
            <p>New module item</p>
            <MdMoreVert size={24} style={{ cursor: 'pointer' }} onClick={() => toggleOptions(newItemId)} />
            {showOptions === newItemId && (
              <div className="options">
                <span onClick={() => handleDelete(newItemId)}><MdDelete /> Delete</span>
                <span onClick={() => handleRename(newItemId)}><MdEdit /> Rename</span>
              </div>
            )}
          </div>
        </>
      );
    } else if (type === 'item2') {
      newItemContent = (
        <>
          <CiLink size={40} />
          <div>
            <h3>{newItemName || 'New Link'}</h3>
            <p>New link item</p>
            <MdMoreVert size={24} style={{ cursor: 'pointer' }} onClick={() => toggleOptions(newItemId)} />
            {showOptions === newItemId && (
              <div className="options">
                <span onClick={() => handleDelete(newItemId)}><MdDelete /> Delete</span>
                <span onClick={() => handleRename(newItemId)}><MdEdit /> Rename</span>
              </div>
            )}
          </div>
        </>
      );
    }

    const newItem = { id: newItemId, type: 'ITEM', name: newItemName, content: newItemContent };
    setAvailableItems((prevItems) => [...prevItems, newItem]);
  };

  const toggleOptions = (itemId) => {
    setShowOptions((prevOptions) => (prevOptions === itemId ? null : itemId));
  };

  const handleDelete = (itemId) => {
    setAvailableItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const handleRename = (itemId) => {
    setSelectedItemId(itemId);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChangeName = (newName) => {
    setAvailableItems((prevItems) =>
      prevItems.map((item) =>
        item.id === selectedItemId ? { ...item, name: newName } : item
      )
    );
    setShowModal(false);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="first-main">
        <Pagetwo addItem={addNewItem} />
        <DropTarget onDrop={handleDrop}>
          <div className="introduction-trigonometry">
            <IoIosPlayCircle size={40} />
            <div>
              <h3>Introduction to Trigonometry</h3>
              <p>Add item to this module</p>
            </div>
          </div>
          {droppedItems.map((item, index) => (
            <div key={index} className="dropped-item">
              {item.content}
            </div>
          ))}
        </DropTarget>
        <div className="course">
          {availableItems.map((item) => (
            <DraggableItem key={item.id} id={item.id} type={item.type}>
              <div className={item.id === 'item1' ? 'introduction-to-course' : 'Understanding-trigonometry'}>
                {item.content}
                <MdMoreVert size={28} style={{ cursor: 'pointer' }} onClick={() => toggleOptions(item.id)} />
                {showOptions === item.id && (
                  <div className="options">
                    <span onClick={() => handleDelete(item.id)}><MdDelete /> Delete</span>
                    <span onClick={() => handleRename(item.id)}><MdEdit /> Rename</span>
                  </div>
                )}
              </div>
            </DraggableItem>
          ))}
        </div>
      </div>
      {showModal && (
        <NameChangeModal
          itemName={availableItems.find((item) => item.id === selectedItemId).name}
          onChange={handleChangeName}
          onClose={handleCloseModal}
        />
      )}
    </DndProvider>
  );
}

export default First;
