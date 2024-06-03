import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import Contact from "../Contact/Contact";
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

export default function ContactList() {
     const items = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const visibleContacts = () =>
    items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );

  return (
    <ul className={css.list}>
      {visibleContacts().map(contact => (
        <li key={contact.id}>
        <Contact contact={contact}/>
        </li>
      ))}
    </ul>
  );
}