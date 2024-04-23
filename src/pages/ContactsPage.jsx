import { useEffect } from "react";
import { useDispatch } from "react-redux";
import DocumentTitle from "../components/DocumentTitle";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import { apiGetUserContacts } from "../redux/contacts/operations";

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiGetUserContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Phonebook</DocumentTitle>
      <ContactForm />
      <ContactList />
    </>
  );
}
