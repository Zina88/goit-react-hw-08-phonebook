import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from "redux/contactsApi";
import css from "./ContactList.module.css";
import { FaTrash, FaUserAlt } from "react-icons/fa";
import { getFilter } from "redux/selectors";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";

const ContactList = () => {
  const { data: contacts } = useGetContactsQuery();
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const { filter } = useSelector(state => getFilter(state));

  const filtredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return (
      contacts &&
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      )
    );
  };

  const filteredContactList = filtredContacts();

  return (
    <ul className={css.contactList}>
      {filteredContactList.map(({ id, name, phone }) => (
        <li key={nanoid()} className={css.contactItem}>
          <FaUserAlt className={css.contactLogo} />
          <p className={css.contactName}>{name}</p>
          <p className={css.contactPhone}>{phone}</p>
          <FaTrash
            className={css.delIcon}
            onClick={() => deleteContact(id)}
            disabled={isLoading}
          ></FaTrash>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
