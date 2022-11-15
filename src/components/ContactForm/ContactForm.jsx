import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from './ContactForm.module.css';
import { addContact } from 'redux/contacts/contacts-operation';
import { getContacts } from 'redux/contacts/contacts-selectors';

export default function ContactForm({ onClose }) {
  const { items } = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;

    const newContact = items.some(contact => {
      return contact.name === name;
    });
    if (!newContact) {
      dispatch(addContact({ name, number }));
      Notify.success(`The ${name} has been added to your contact list.`);
      onClose();
    } else {
      Report.warning(
        `${name}`,
        'This user is already in the contact list.',
        'Close',
      );
    }
  };

  const contactSchema = yup.object({
    name: yup.string().required().min(3).max(30),
    number: yup.number().required(),
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      {({ values, handleChange }) => (
        <Form className={css.form} onSubmit={handleSubmit}>
          <label className={css.label}>
            <span className={css.title}>Name</span>
            <Field
              className={css.input}
              type="text"
              name="name"
              onChange={handleChange}
              value={values.name}
            />
            <ErrorMessage name="name" component="div" />
          </label>
          <label className={css.label}>
            <span className={css.title}>Number</span>
            <Field
              className={css.input}
              type="tel"
              name="number"
              onChange={handleChange}
              value={values.number}
            />
            <ErrorMessage name="number" component="div" />
          </label>
          <button className={css.button} type="submit">
            Add
          </button>
        </Form>
      )}
    </Formik>
  );
}

ContactForm.propTypes = {
  onClose: PropTypes.func,
};
