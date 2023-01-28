import Style from './Contacts.module.css';
import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { selectContact } from 'redux/selectors';

const ContactList = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContact);

  const filtredContacts = () => {
    if (filter) {
      const normalizedFilter = filter.toLowerCase();
      if (contacts.length !== 0) {
        return contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter)
        );
      }
    }
    return contacts;
  };
  const contactsFiltred = filtredContacts();

  return (
    <ul className={Style.contactsList}>
      {contactsFiltred &&
        contactsFiltred.map(({ id, name, number }) => {
          return <ContactItem id={id} key={id} name={name} number={number} />;
        })}
    </ul>
  );
};

export default ContactList;
