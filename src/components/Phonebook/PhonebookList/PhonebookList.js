import { useEffect, useMemo } from "react";
import filterContacts from "../../../helpers/filterContacts";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteContact,
  fetchContacts,
} from "../../../redux/contacts/phoenbookOperations";
import phonebookSelectors from "../../../redux/contacts/phonebookSelectors";

export default function PhonebookList() {
  const dispatch = useDispatch();
  const contacts = useSelector(phonebookSelectors.getContactList);
  const filter = useSelector(phonebookSelectors.getFilterValue);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const filteredContacts = useMemo(() => {
    console.log("useMemo");
    return filterContacts(contacts, filter);
  }, [contacts, filter]);
  return (
    <ul>
      {filteredContacts.map(({ name, number, id }) => (
        <li key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <button
            onClick={() => dispatch(deleteContact(id))}
            className="btnDelete"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
