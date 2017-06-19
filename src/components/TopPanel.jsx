import {h, render} from 'preact';
import {connect} from 'preact-redux';
import {addContact} from '../actions';

const TopPanel = ({onAddClick}) => {
    return <div>
        <h1>Контакты</h1>
        <button onClick={onAddClick}>
            Добавить контакт
        </button>
    </div>
}

const mapDispatchToProps = (dispatch) => ({
    onAddClick() {
        dispatch(addContact({}))
    }
});

export default connect(
    null,
    mapDispatchToProps,
)(TopPanel)
