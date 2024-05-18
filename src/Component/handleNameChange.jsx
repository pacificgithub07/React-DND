const handleNameChange = (e, id) => {
    const newName = e.target.value;
    setAvailableItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, name: newName } : item
      )
    );
  };
  