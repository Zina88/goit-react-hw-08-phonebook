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

const Contact = () => {
  const { showModal, toggleModal } = useShowModal(false);
  const dispatch = useDispatch();
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
      <div>
        <Filter />
        {isLoading ? <Loader /> : <ContactList />}
      </div>
    </div>
  );
};

export default Contact;
