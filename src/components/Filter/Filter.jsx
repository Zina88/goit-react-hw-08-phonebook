import { useDispatch } from "react-redux";
import { changeFilter } from "redux/contactSlice";
import css from "./Filter.module.css";

export default function Filter() {
  const dispatch = useDispatch();

  const changeFieldFilter = e => {
    const value = e.currentTarget.value;
    dispatch(changeFilter(value));
  };

  return (
    <label className={css.filterLabel}>
      <p className={css.filterTitle}>Find contacts by name</p>
      <input
        type="text"
        className={css.filterText}
        onChange={changeFieldFilter}
      />
    </label>
  );
}
