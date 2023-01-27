import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectIsLoading } from 'redux/selectors';
import { selectError } from 'redux/selectors';
import { selectContact } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
// import { Helmet } from 'react-helmet-async';
import ContactList from 'components/Contacts/ContactsList';
import Filter from 'components/Filter/Filter';
import FormPhoneBook from 'components/FormPhoneBook/FormPhoneBook';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContact);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      {/* <Helmet> */}
      <h1>Your contacts</h1>
      {/* </Helmet> */}
      <div>
        <FormPhoneBook />
      </div>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      {contacts.length > 0 && <ContactList />}
      {/* <ContactList /> */}
    </div>
  );
};
export default Contacts;
