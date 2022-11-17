import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.header}>
      <span className={css.wellcome}>
        Wellcome to <br />
      </span>
      Phone
      <span className={css.headerSpan}>book</span>
      <p className={css.about}>
        The phone book allows you to store contacts and quickly search for
        contacts by name
      </p>
    </div>
  );
};

export default Home;
