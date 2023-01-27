import Style from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';
const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  return (
    <li className={Style.contactsItem}>
      <p className={Style.contactsText}>
        {name}: <span>{phone}</span>
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
  phone: PropTypes.string.isRequired,
};
export default ContactItem;
