import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../redux/filters/slice";
import { selectFilterName } from "../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const selectNameFilter = useSelector(selectFilterName);

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        onChange={(evt) => dispatch(changeFilter(evt.target.value))}
        value={selectNameFilter}
        spellCheck="true"
      />
    </div>
  );
};

export default SearchBox;
