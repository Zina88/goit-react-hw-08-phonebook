import { FaTrash, FaUserAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { deleteContact } from 'redux/contacts/contacts-operation';
import { getContacts, getFilter } from 'redux/contacts/contacts-selectors';
import css from './ContactList.module.css';

const ContactList = () => {
  const { items } = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filtredContacts = () => {
    if (!filter) {
      return items;
    }

    const normalizedFilter = filter.toLowerCase();
    return (
      items &&
      items.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
      )
    );
  };

  const filteredContactList = filtredContacts();

  return (
    <>
      {
        <ul className={css.contactList}>
          {filteredContactList.map(({ id, name, number }) => (
            <li key={nanoid()} className={css.contactItem}>
              <FaUserAlt className={css.contactLogo} />
              <p className={css.contactName}>{name}</p>
              <p className={css.contactPhone}>{number}</p>
              <FaTrash
                className={css.delIcon}
                onClick={() => dispatch(deleteContact(id))}
              ></FaTrash>
            </li>
          ))}
        </ul>
      }
      {items.length === 0 && (
        <div className={css.empty}>
          <p className={css.emptyText}>Contact List is empty...</p>
        </div>
      )}
    </>
  );
};

export default ContactList;
