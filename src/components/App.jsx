import { h, render } from 'preact';

import TopPanel from './TopPanel';
import ContactsList from './ContactsList';

export default () => {
    return <div>
        <TopPanel/>
        <ContactsList/>
    </div>;
}
