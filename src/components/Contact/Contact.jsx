import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from "redux/contactsApi";
import ContactList from "components/ContactList/ContactList";
import ContactForm from "components/ContactForm";
import useShowModal from "hooks/useShowModal";
import Modal from "components/Modal";
import Loader from "components/Loader";

const Contact = () => {
  const { showModal, toggleModal } = useShowModal(false);

  const { data: contacts, isFetching } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  return (
    <div>
      {showModal && (
        <Modal onClose={toggleModal}>
          <ContactForm contacts={contacts} />
        </Modal>
      )}

      {isFetching && <Loader />}
      {contacts && <ContactList contacts={contacts} onDelete={deleteContact} />}
    </div>
  );
};

export default Contact;
