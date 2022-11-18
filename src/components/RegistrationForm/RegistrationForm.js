import { useDispatch } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import { userRegisterSchema } from 'utilits/validationSchema';
import { register } from 'redux/auth/auth-operations';
import css from './RegistrationForm.module.css';

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      }),
    );
    form.reset();
  };

  return (
    <div>
      <h2 className={css.title}>Registration</h2>

      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={userRegisterSchema}
      >
        {({ values, handleChange, isSubmitting }) => (
          <Form className={css.form} onSubmit={handleSubmit}>
            <label className={css.label}>
              Name
              <input
                className={css.input}
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              <ErrorMessage className={css.error} name="name" component="div" />
            </label>

            <label className={css.label}>
              Email
              <input
                className={css.input}
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              <ErrorMessage
                className={css.error}
                name="email"
                component="div"
              />
            </label>

            <label className={css.label}>
              Password
              <input
                className={css.input}
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              <ErrorMessage
                className={css.error}
                name="password"
                component="div"
              />
            </label>

            <button className={css.button} type="submit">
              {isSubmitting ? '...' : 'Registration'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
