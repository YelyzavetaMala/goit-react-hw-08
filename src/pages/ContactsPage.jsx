import { useEffect } from "react";
import { useDispatch } from "react-redux";
import DocumentTitle from "../components/DocumentTitle";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import { fetchContacts } from "../redux/contacts/operations";

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Phonebook</DocumentTitle>
      <ContactForm />
      <ContactList />
    </>
  );
}
