import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DocumentTitle from "../components/DocumentTitle";
import SearchBox from "../components/SearchBox";
import { apiGetUserContacts } from "../redux/contacts/operations";
import { selectError, selectIsLoading } from "../redux/contacts/selectors";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    const get = dispatch(apiGetUserContacts());
    console.log("get: ", get);
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Phonebook</DocumentTitle>
      <SearchBox />
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
    </>
  );
}
