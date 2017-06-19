import { createStore } from 'redux';

const contact = (state, action) => {
    switch (action.type) {
        case 'SAVE_CONTACT':
        case 'ADD_CONTACT':
            return {
                id: action.id,
                objectKey: action.objectKey,
                editing: action.editing,
                name: action.name,
                lastName: action.lastName,
                phone: action.phone,
                address: action.address
            };
            break;
        default:
            return state;
    }
};

const contactsList = (state, action) => {
    switch (action.type) {
        case 'LOAD_CONTACTS':
            return action.contacts;
            break;
        case 'ADD_CONTACT':
            return [...state, contact(null, action)]
            break;
        case 'SAVE_CONTACT':
            return state.map(c => {
                if (action.id == c.id) {
                    return contact(null, action);
                }

                return c;
            });
            break;
        case 'EDIT_CONTACT':
            return state.map(c => {
                if (c.id == action.id) {
                    return Object.assign({}, c, {editing: true});
                }

                return c;
            });
            break;
        case 'REMOVE_CONTACT':
            return state.filter(c => c.id != action.id);
            break;
        default:
            return state;
    }
};

export default createStore( contactsList, []);


