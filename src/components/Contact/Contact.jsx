import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contacts-operation';
import { getContacts } from 'redux/contacts/contacts-selectors';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm';
import AddContact from 'components/AddContact';
import Filter from 'components/Filter';
import Modal from 'components/Modal';
import Loader from 'components/Loader';
import useShowModal from 'hooks/useShowModal';

const Contact = ({ id }) => {
  const { showModal, toggleModal } = useShowModal(false);
  const dispatch = useDispatch();
  const { items } = useSelector(getContacts);
  const { isLoading } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {showModal && (
        <Modal onClose={toggleModal}>
          <ContactForm />
        </Modal>
      )}

      <AddContact />
      {items.length > 0 ? (
        <div>
          <Filter />
          {isLoading ? <Loader /> : <ContactList />}
        </div>
      ) : (
        <p>Contact List is empty...</p>
      )}
    </div>
  );
};

export default Contact;
