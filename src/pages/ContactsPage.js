import Filter from "components/Filter";
import ContactList from "components/ContactList";
import { useGetContactsQuery } from "redux/contactsApi";
import Loader from "components/Loader";
import css from "./ContactsPage.module.css";

const ContactPage = () => {
  const { data, isLoading } = useGetContactsQuery();

  return (
    <>
      <Filter />
      {isLoading ? <Loader /> : <ContactList />}
      {!data ||
        (data.length === 0 && (
          <p className={css.empty}>Contact list is empty :(</p>
        ))}
    </>
  );
};

export default ContactPage;
