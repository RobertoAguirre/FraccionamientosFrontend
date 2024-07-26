// src/components/ItemList.js
import React, { useEffect, useState } from 'react';
import { List, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button } from '@mui/material';
import Item from './Item';

const HouseList = () => {
  const [items, setItems] = useState([]);
  const [isEditDialogOpen, setEditDialogOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    // Simulando una llamada a la API
    const fetchData = async () => {
      const data = [
        { id: 1, name: 'Casa 2', description: 'Dueño de la casa:', avatar: 'https://media1.tenor.com/m/NVwxxoyoyGgAAAAd/racoon-pedro.gif' },
        { id: 1, name: 'Casa 3', description: 'Dueño de la casa:', avatar: 'https://media1.tenor.com/m/NVwxxoyoyGgAAAAd/racoon-pedro.gif' },
        { id: 1, name: 'Casa 4', description: 'Dueño de la casa:', avatar: 'https://media1.tenor.com/m/NVwxxoyoyGgAAAAd/racoon-pedro.gif' },
        { id: 1, name: 'Casa 5', description: 'Dueño de la casa:', avatar: 'https://media1.tenor.com/m/NVwxxoyoyGgAAAAd/racoon-pedro.gif' },
        { id: 1, name: 'Casa 6', description: 'Dueño de la casa:', avatar: 'https://media1.tenor.com/m/NVwxxoyoyGgAAAAd/racoon-pedro.gif' },
        { id: 1, name: 'Casa 7', description: 'Dueño de la casa:', avatar: 'https://media1.tenor.com/m/NVwxxoyoyGgAAAAd/racoon-pedro.gif' },
        { id: 2, name: 'Casa 8', description: 'Dueño de la casa:', avatar: 'https://media1.tenor.com/m/NVwxxoyoyGgAAAAd/racoon-pedro.gif' },
        // Más objetos aquí


      ];
      setItems(data);
    };

    fetchData();
  }, []);

  const handleEditClick = (item) => {
    setCurrentItem(item);
    setEditDialogOpen(true);
  };

  const handleDeleteClick = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleDialogClose = () => {
    setEditDialogOpen(false);
    setCurrentItem(null);
  };

  const handleDialogSave = () => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === currentItem.id ? currentItem : item
      )
    );
    handleDialogClose();
  };

  return (
    <>
      <List>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onEdit={handleEditClick}
            onDelete={handleDeleteClick}
          />
        ))}
      </List>
      {currentItem && (
        <Dialog open={isEditDialogOpen} onClose={handleDialogClose}>
          <DialogTitle>Edit Item</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Edit the fields below to update the item.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label="Name"
              type="text"
              fullWidth
              value={currentItem.name}
              onChange={(e) =>
                setCurrentItem({ ...currentItem, name: e.target.value })
              }
            />
            <TextField
              margin="dense"
              label="Description"
              type="text"
              fullWidth
              value={currentItem.description}
              onChange={(e) =>
                setCurrentItem({
                  ...currentItem,
                  description: e.target.value,
                })
              }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose}>Cancel</Button>
            <Button onClick={handleDialogSave}>Save</Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

export default HouseList;
