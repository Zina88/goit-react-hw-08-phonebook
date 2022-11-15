import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.header}>
      <span className={css.wellcome}>
        Wellcome to <br />
      </span>
      Phone
      <span className={css.headerSpan}>book</span>
    </div>
  );
};

export default Home;
