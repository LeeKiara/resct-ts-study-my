import { MutableRefObject, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContactsData } from "../data";

const ContactForm = () => {
  // programmatic 방식으로 라우팅 처리
  const navigate = useNavigate();
  const phoneRef = useRef() as MutableRefObject<HTMLInputElement>;

  const { contactsData, createContactData } = useContactsData(1);

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

  const handleSave = () => {
    // Filter로 체크된 항목만 추출
    const selectedContacts = contacts.filter((contact) => contact.isChecked);

    // 검증
    // 서버 연동
    // 상태값(데이터) 변경
    createContactData(selectedContacts);

    // 완료가 되면 목록 화면으로 이동
    navigate("/contacts");
  };

  return (
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
  );
};

export default ContactForm;
