import {v4} from 'uuid';

export const addContact = (contact) => ({
    type: 'ADD_CONTACT',
    id: v4(),
    editing: true,
    ...contact
});

export const loadContacts = (contacts = []) => ({
    type: 'LOAD_CONTACTS',
    contacts
});

export const removeContact = (id) => ({
    type: 'REMOVE_CONTACT',
    id
});

export const editContact = (id) => ({
    type: 'EDIT_CONTACT',
    id,
    editing: true
});

export const saveContact = (contact) => ({
    type: 'SAVE_CONTACT',
    ...contact,
    editing: false
});
