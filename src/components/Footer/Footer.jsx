import css from './Footer.module.css';
import { BsBookHalf } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className={css.footer}>
      <div>
        <BsBookHalf />
        <div className={css.copyright}>©Phonebook 2022 by Zina Sytnik</div>
      </div>
    </div>
  );
};

export default Footer;
