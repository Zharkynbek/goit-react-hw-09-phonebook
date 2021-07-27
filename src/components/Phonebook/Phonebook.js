import PhonebookForm from "./PhonebookForm/PhonebookForm";
import PhonebookList from "./PhonebookList/PhonebookList";
import PhonebookFilter from "./PhonebookFilter/PhonebookFilter";
import phonebookSelectors from "../../redux/contacts/phonebookSelectors";

import { useSelector } from "react-redux";

export default function Phonebook() {
  const contacts = useSelector(phonebookSelectors.getContactList);
  const filter = useSelector(phonebookSelectors.getFilterValue);
  return (
    <div>
      <h1>Phonebook</h1>
      <PhonebookForm />
      {(contacts.length > 1 || filter !== "") && <PhonebookFilter />}
      <PhonebookList />
    </div>
  );
}
