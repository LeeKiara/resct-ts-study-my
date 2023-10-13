import { MutableRefObject, useRef, useState } from "react";
import ConfirmModalEx from "./ConfirmModalEx";
import PostModifyModal from "./PostModifyModal";

interface ContactProps {
  name: string;
  hp: string;
  email: string;
}

const Contact = () => {
  // contact 목록 상태
  const [contacts, setContacts] = useState<ContactProps[]>([]);
  const [isModalVisible, setModalVisible] = useState(false);

  // 입력박스 참조
  const nameInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  // 연락처 추가
  const handleAddData = () => {
    const inputName = nameInputRef.current;
    const inputPhone = phoneInputRef.current;
    const inputEmail = emailInputRef.current;

    // console.log("연락처 정보--------");
    // console.log(inputName.value + "," + inputPhone.value);

    setContacts([
      // { name: input.value, hp: input.value, email: input.value },
      { name: inputName.value, hp: inputPhone.value, email: inputEmail.value },
      ...contacts,
    ]);

    console.log("0. 연락처 정보--------");
    contacts.map((item, idx) => {
      console.log(idx);
      console.log(item);
    });
  };

  // 연락처 수정 모달창 보여주기
  const handleOpenModal = (index: number) => {
    setModalVisible(true);
  };

  const handleConfirm = () => {
    alert("확인되었습니다.");
    setModalVisible(false);
  };

  const handleCancel = () => {
    alert("취소되었습니다.");
    setModalVisible(false);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        style={{ width: "30em", height: "2em" }}
        ref={nameInputRef}
      />
      <br />
      <input
        type="text"
        placeholder="휴대폰"
        style={{ width: "30em", height: "2em" }}
        ref={phoneInputRef}
      />
      <br />
      <input
        type="text"
        placeholder="이메일"
        style={{ width: "30em", height: "2em" }}
        ref={emailInputRef}
      />
      <br />
      <input
        type="file"
        placeholder="image"
        accept="image/*"
        style={{ width: "30em", height: "2em" }}
      />
      <br />
      <br />
      <button onClick={handleAddData}>추가</button>

      {contacts.length === 0 && <p>목록이 없습니다.</p>}
      {contacts.length > 0 && (
        <div
          style={{
            marginTop: "10px",
          }}
        >
          <table style={{ width: "600px", border: "1px solid black" }}>
            <thead>
              <tr>
                <td>이름</td>
                <td>전화번호</td>
                <td>이메일</td>
              </tr>
            </thead>
            <tbody>
              {contacts.map((item, index) => (
                // <tr key={index} onClick={handleOpenModal(index)}>
                <tr
                  key={index}
                  onClick={() => {
                    handleOpenModal(index);
                  }}
                >
                  {/* <tr key={index}> */}
                  <td style={{ width: "30%" }}>{item.name}</td>
                  <td style={{ width: "30%" }}>{item.hp}</td>
                  <td>{item.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* 
      <ConfirmModalEx
        isVisible={isModalVisible}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      /> */}

      <PostModifyModal
        index={modifyItem.index}
        title={modifyItem.title}
        content={modifyItem.content}
        onConfirm={handleModifyModalConfirm}
        onCancel={handleModifyModalCancel}
      />
    </div>
  );
};

export default Contact;
