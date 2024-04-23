import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contacts/operations";
import PropTypes from "prop-types";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div>
      <span>{name}</span>
      <span>{number}</span>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Contact;
