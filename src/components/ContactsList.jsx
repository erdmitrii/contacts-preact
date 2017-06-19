import {h, render} from 'preact';
import {connect} from 'preact-redux';
import Contact from './Contact';
import {saveContact, removeContact, editContact} from '../actions';

const ContactsList = ({contacts, onRemoveContactClick, onEditContactClick, onSaveContactClick}) => {
    return <div>
        {contacts.map(contact => {
            return <Contact
                key={contact.id}
                {...contact}
                onRemoveClick={() => onRemoveContactClick(contact.id, contact.objectKey)}
                onEditClick={() => onEditContactClick(contact.id)}
                onSaveClick={onSaveContactClick}
            />
        })}
    </div>
};

const mapStateToProps = (state) => ({
    contacts: state
});

const mapDispatchToProps = (dispatch) => ({
    onRemoveContactClick(id) {
        firebase.database().ref(id).remove();

        dispatch(removeContact(id));
    },
    onEditContactClick(id) {
        dispatch(editContact(id));
    },
    onSaveContactClick(contact) {
        firebase.database().ref(contact.id).set(contact);

        dispatch(saveContact(contact));
    }
});

export default connect(mapStateToProps, mapDispatchToProps) (ContactsList)
