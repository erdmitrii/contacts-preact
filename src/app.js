import { h, render } from 'preact';
import { Provider } from 'preact-redux';
import store from './store';
import App from './components/App';

import {loadContacts} from './actions';

firebase.database().ref().once('value', (res) => {
    let userData = res.val(),
        data = [];

    for (let key in userData) {
        data.push(userData[key]);
    }

    if (userData) {
        store.dispatch(loadContacts(data))
    }
});

render((
    <Provider store={store}>
        <App />
    </Provider>
), document.body);
