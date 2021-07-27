import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../redux/contacts/phonebookActions";
import phonebookSelectors from "../../../redux/contacts/phonebookSelectors";

export default function PhonebookFilter() {
  const dispatch = useDispatch();

  const filterValue = useSelector(phonebookSelectors.getFilterValue);
  const onAddContact = (e) => dispatch(actions.handleFilterContacts(e));

  return (
    <>
      <div className="PhonebookFilter">
        <label>
          <p>filter contacts</p>
          <input
            type="text"
            name="filter"
            id=""
            value={filterValue}
            onInput={onAddContact}
          />
        </label>
      </div>
      <h3>Contacts</h3>
    </>
  );
}
