import React from 'react';
import { useDrop } from 'react-dnd';

const DropTarget = ({ onDrop, children }) => {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: 'ITEM',
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;
  let backgroundColor = '#ffffff';
  if (isActive) {
    backgroundColor = '#f7f7f7';
  } else if (canDrop) {
    backgroundColor = '#f1f1f1';
  }

  return (
    <div ref={drop} style={{ backgroundColor, padding: '20px', border: '1px dashed gray' }}>
      {children}
    </div>
  );
};

export default DropTarget;
