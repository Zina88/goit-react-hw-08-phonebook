import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { getFilter } from 'redux/contacts/contacts-selectors';
import { changeFilter } from 'redux/contacts/filter-slice';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const changeFieldFilter = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.wrapper}>
      <label className={css.filterLabel}>
        <p className={css.filterTitle}>Find contacts by name</p>
        <input
          type="text"
          className={css.filterText}
          onChange={changeFieldFilter}
          value={filter}
        />
      </label>
    </div>
  );
}
