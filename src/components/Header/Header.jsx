import { useState } from "react";
import { BsFillPersonPlusFill } from "react-icons/bs";
import Modal from "components/Modal";
import ContactForm from "components/ContactForm";
import css from "./Header.module.css";

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);

  return (
    <>
      <div className={css.header}>
        Phone<span className={css.headerSpan}>book</span>
      </div>
      <button className={css.headerBtn} type="button" onClick={toggleModal}>
        <p>Add new contact</p>
        <BsFillPersonPlusFill size={20} />
      </button>

      {showModal && (
        <Modal onClose={toggleModal}>
          <ContactForm onClose={toggleModal} />
        </Modal>
      )}
    </>
  );
}
