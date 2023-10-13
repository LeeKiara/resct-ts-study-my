import { useState } from "react";
import ShowMessageModal from "./ShowMessagebox";

interface SampleProps {
  title: string;
  children: React.ReactNode;
}

const Child = ({ message, onButtonClick }) => {
  return (
    <div>
      <p>{message}</p>
      <button onClick={onButtonClick}>Button Click</button>
    </div>
  );
};

const handleButtonClick = () => {
  alert("자식 컴포넌트에서 버튼이 클릭되었습니다!");
};

const Parent = () => {
  const [showMessageModal, setShowMessageModal] = useState(false);

  const handleShowMessageButton = () => {
    setShowMessageModal(true);
  };

  const handleCancel = () => {
    setShowMessageModal(false);
  };

  return (
    <div>
      <h1>부모 컴포넌트</h1>
      <Child
        message="Hi~ This is child component"
        onButtonClick={handleButtonClick}
      />
      <button onClick={handleShowMessageButton}>메세지 보여주기</button>

      {showMessageModal && (
        <ShowMessageModal
          message="메세지를 보여줍니다."
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default Parent;
