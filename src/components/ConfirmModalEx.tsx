import { MutableRefObject, useRef, useState } from "react";

interface SampleProps {
  title: string;
  children: React.ReactNode;
}

const handleButtonClick = () => {};

// ConfirmModal 컴포넌트
const ConfirmModalEx = ({ isVisible, onConfirm, onCancel }) => {
  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        padding: "20px",
        boxShadow: "0px 0px 10px gray",
      }}
    >
      <p>정말로 진행하시겠습니까?</p>
      <button onClick={onConfirm}>예</button>&nbsp;&nbsp;
      <button onClick={onCancel}>아니오</button>
    </div>
  );
};

// App 컴포넌트
function App() {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
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
      <h1>App 컴포넌트</h1>
      <button onClick={handleOpenModal}>모달 열기</button>
      <ConfirmModalEx
        isVisible={isModalVisible}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </div>
  );
}

// export default App;
export default ConfirmModalEx;
