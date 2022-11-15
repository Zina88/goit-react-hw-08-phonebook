import { useState } from 'react';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import Modal from 'components/Modal';
import ContactForm from 'components/ContactForm';
import css from './AddContact.module.css';


export const Addcontact = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);

  return (
    <div>
      <button className={css.headerBtn} type="button" onClick={toggleModal}>
        <p>Add new contact</p>
        <BsFillPersonPlusFill size={20} />
      </button>

      {showModal && (
        <Modal onClose={toggleModal}>
          <ContactForm onClose={toggleModal} />
        </Modal>
      )}
    </div>
  );
};

export default Addcontact;
