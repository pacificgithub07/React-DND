
import React from 'react';
import './App.css';
import First from './First/First';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <>
    <DndProvider backend={HTML5Backend}>
    <First />
  </DndProvider>
    </>
  );
}

export default App;
