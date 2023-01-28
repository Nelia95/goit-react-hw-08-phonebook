import Style from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';
const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={Style.contactsItem}>
      <p className={Style.contactsText}>
        {name}: <span>{number}</span>
      </p>

      <button
        className={Style.contactsBtn}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};
ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
export default ContactItem;
