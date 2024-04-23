import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import SearchBox from "../components/SearchBox";
import { fetchContacts } from "../redux/contacts/operations";

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <SearchBox />
      <ContactForm />
      <ContactList />
    </>
  );
}
