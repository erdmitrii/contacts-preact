import {h, render} from 'preact';

export default ({
                    id, editing, name, lastName, phone,
                    address, onSaveClick, onEditClick, onRemoveClick
                }) => {
    let inputName,
        inputLastName,
        inputPhone,
        inputAddress;

    let editingTemp = (
        <div>
            <h4>Имя: {name}</h4>
            <h4>Фамилия: {lastName}</h4>
            <p>Телефон (моб): {phone}</p>
            <p>Адрес: {address}</p>
        </div>
    );

    if (editing) {
        editingTemp = (
            <form onSubmit={(e) => {
                e.preventDefault();

                onSaveClick({
                    id,
                    name: inputName.value,
                    lastName: inputLastName.value,
                    phone: inputPhone.value,
                    address: inputAddress.value
                });
            }}>
                <div>
                    <input ref={input => {inputName = input}}
                           type="text"
                           placeholder="Имя"
                           defaultValue={name}/>
                </div>
                <div>
                    <input ref={input => {inputLastName = input}}
                           type="text"
                           placeholder="Фамилия"
                           defaultValue={lastName}/>
                </div>
                <div>
                    <input ref={input => {inputPhone = input}}
                           type="tel"
                           placeholder="Телефон"
                           defaultValue={phone}/>
                </div>
                <div>
                    <textarea ref={input => {inputAddress = input}}
                              placeholder="Адресс"
                              defaultValue={address}/>
                </div>
                <input type="submit" value="Сохранить"/>
            </form>
        );
    }

    //вывод данных
    return (
        <div className="contact">
            {!editing && (
                <i className="fa fa-edit"
                   onClick={() => onEditClick(id)}>
                    Редактировать
                </i>
            )}
            <i className="fa fa-times"
               onClick={() => onRemoveClick(id)}>
                Удалить
            </i>
            {editingTemp}
        </div>
    );
};
