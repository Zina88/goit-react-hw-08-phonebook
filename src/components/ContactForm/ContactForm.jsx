import { useAddContactMutation, useGetContactsQuery } from "redux/contactsApi";
import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { Report } from "notiflix/build/notiflix-report-aio";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import css from "./ContactForm.module.css";

export default function ContactForm({ onClose }) {
  const [createContact] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const handleSubmit = async ({ name, phone }) => {
    const newContact = contacts.some(contact => {
      return contact.name === name;
    });
    if (!newContact) {
      await createContact({ name, phone });
      Notify.success(`The ${name} has been added to your contact list.`);
      onClose();
    } else {
      Report.warning(
        `${name}`,
        "This user is already in the contact list.",
        "Close"
      );
    }
  };

  const contactSchema = yup.object({
    name: yup.string().required().min(3).max(30),
    phone: yup.number().required(),
  });

  return (
    <Formik
      initialValues={{ name: "", phone: "" }}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      {({ values, handleChange, handleSubmit }) => (
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
              name="phone"
              onChange={handleChange}
              value={values.phone}
            />
            <ErrorMessage name="phone" component="div" />
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
