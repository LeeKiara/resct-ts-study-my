import { useNavigate } from "react-router-dom";
import { useContactsData } from "../data";
import { useState } from "react";

const ContactList = () => {
  const [page, setPage] = useState(0);
  // 컴포넌트가 마운팅될때 1번찍히고
  // contactData를 fetcher로 가져온 다음에 상태가 업데이트 된다음에 1번찍힘
  // console.log(page);

  const { contactsData: contacts, isContactDataValidating } =
    useContactsData(page);

  // 서버/스토리지의 데이터와 캐시데이터 비교중인지 여부를 표시
  console.log("---validating---");
  console.log(isContactDataValidating);

  const navigate = useNavigate();

  const handleClickItem = (id: number) => {
    navigate(`/contacts/detail/${id}`);
  };

  // 초기 상태로 이름과 전화번호가 하나씩 나타나도록 배열을 생성
  const initialContacts = [{ name: "", phone: "", isChecked: false }];
  const [contacts, setContacts] = useState(initialContacts);

  // 여러 이름과 전화번호를 입력할 수 있도록 수정하려면
  // 배열을 사용하여 동적으로 입력 필드를 생성하는 방식
  const handleAddContact = () => {
    // 새로운 이름과 전화번호 필드 추가
    const newContact = { name: "", phone: "", isChecked: false };
    setContacts([...contacts, newContact]);
  };

  const handleNameChange = (index, value) => {
    const updatedContacts = [...contacts];
    updatedContacts[index].name = value;
    setContacts(updatedContacts);
  };

  const handlePhoneChange = (index, value) => {
    const updatedContacts = [...contacts];
    updatedContacts[index].phone = value;
    setContacts(updatedContacts);
  };

  const handleCheckboxChange = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts[index].isChecked = !contacts[index].isChecked;
    setContacts(updatedContacts);
  };

  return (
    <div>
      <div>
        <h3>Contact List</h3>
        <button
          onClick={() => {
            setPage(page + 1);
          }}>
          Next
        </button>
        <ul>
          {contacts.map((c) => (
            <li
              style={{ cursor: "pointer" }}
              key={`item-${c.id}`}
              onClick={() => {
                handleClickItem(c.id);
              }}>
              <span>
                {c.name} - {c.phone}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div>
          <h3>Contact Form</h3>
          {contacts.map((contact, index) => (
            <div key={index}>
              <input
                type="checkbox"
                checked={contact.isChecked}
                onChange={() => handleCheckboxChange(index)}
              />
              <input
                type="text"
                placeholder="Name"
                value={contact.name}
                onChange={(e) => handleNameChange(index, e.target.value)}
              />
              <input
                type="text"
                ref={phoneRef}
                placeholder="Phone"
                value={contact.phone}
                onChange={(e) => handlePhoneChange(index, e.target.value)}
              />
            </div>
          ))}
          <button onClick={handleAddContact}>Add Contact</button>
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
