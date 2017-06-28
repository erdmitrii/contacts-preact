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

//определяем рабочие методы компонента
const mapDispatchToProps = (dispatch) => ({
    onAddClick() {
        //вызывает redux метод для добавлени пустого контакта
        dispatch(addContact({}))
    }
});

//экспортируем компонент с определенными ранее методами
export default connect(
    null, //state  
    mapDispatchToProps, 
)(TopPanel)
