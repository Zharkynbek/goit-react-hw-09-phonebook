const getFilterValue = (state) => state.phonebook.filter;
const getContactList = (state) => state.phonebook.contacts;

const selector = {
  getFilterValue,
  getContactList,
};
export default selector;
