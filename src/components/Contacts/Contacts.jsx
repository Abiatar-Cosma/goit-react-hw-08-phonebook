import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, addContact, deleteContact } from '../../redux/Slices/contactsSlice';
import { TextField, Button, List, ListItem, ListItemText, Container, Typography, Box } from '@mui/material';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const [name, setName] = useState('');
  const [number, setNumber] = useState(''); 
  

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = () => {
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };
  

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contacts
        </Typography>
        <TextField
          fullWidth
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
        />
        <TextField
  fullWidth
  label="Phone"
  value={number} 
  onChange={(e) => setNumber(e.target.value)} 
  margin="normal"
/>

        <Button variant="contained" onClick={handleAddContact} sx={{ mt: 2 }}>
          Add Contact
        </Button>
        <List sx={{ mt: 2 }}>
          {contacts.map((contact) => (
            <ListItem key={contact.id}>
              <ListItemText primary={contact.name} secondary={contact.phone} />
              <Button color="error" onClick={() => dispatch(deleteContact(contact.id))}>
                Delete
              </Button>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default Contacts;