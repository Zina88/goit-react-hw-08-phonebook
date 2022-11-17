import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import { Formik, Form, ErrorMessage } from 'formik';
import { userLoginSchema } from 'utilits/validationSchema';
import PropTypes from 'prop-types';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      }),
    );
    form.reset();
  };

  return (
    <div>
      <h2 className={css.title}>Login</h2>

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={userLoginSchema}
      >
        {({ values, handleChange, isSubmitting }) => (
          <Form className={css.form} onSubmit={handleSubmit}>
            <label className={css.label}>
              Email
              <input
                className={css.input}
                type="email"
                value={values.email}
                name="email"
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
                value={values.password}
                name="password"
                onChange={handleChange}
              />
              <ErrorMessage
                className={css.error}
                name="password"
                component="div"
              />
            </label>

            <button className={css.button} type="submit">
              {isSubmitting ? '...' : 'Login'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  validationSchema: PropTypes.shape({
    name: PropTypes.func,
    number: PropTypes.func,
    email: PropTypes.func,
  }),
};
