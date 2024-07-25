// src/components/Item.js
import React from 'react';
import { ListItem, ListItemText, ListItemAvatar, Avatar, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Item = ({ item, onEdit, onDelete }) => {
  return (
    <ListItem
      sx={{
        backgroundColor: 'rgba(63, 81, 181, 0.1)', // Añade color con opacidad
        borderRadius: 8,
        margin: 1,
        '&:hover': {
          backgroundColor: 'rgba(63, 81, 181, 0.2)', // Cambia el color en hover
        },
      }}
      secondaryAction={
        <>
          <IconButton edge="end" aria-label="edit" onClick={() => onEdit(item)}>
            <EditIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete" onClick={() => onDelete(item.id)}>
            <DeleteIcon />
          </IconButton>
        </>
      }
    >
      <ListItemAvatar>
        <Avatar src={item.avatar} />
      </ListItemAvatar>
      <ListItemText primary={item.name} secondary={item.description} />
    </ListItem>
  );
};

export default Item;
