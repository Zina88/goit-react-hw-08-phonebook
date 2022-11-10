import css from "./Loader.module.css";
import { BiLoaderCircle } from "react-icons/bi";

function Loader() {
  return (
    <div className={css.loaderWrapper}>
      <BiLoaderCircle className={css.loaderIcon} />
    </div>
  );
}

export default Loader;
