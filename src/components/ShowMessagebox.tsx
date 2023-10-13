import { MutableRefObject, useRef } from "react";

interface ShowMessageModalProps {
  message: string;
  onCancel?: () => void;
}

const ShowMessageModal = ({ message, onCancel }: ShowMessageModalProps) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9990,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      }}
    >
      <div style={{ width: "300px", padding: 20, backgroundColor: "white" }}>
        <p>{message}</p>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 20 }}>
          <button onClick={onCancel}>확인</button>
        </div>
      </div>
    </div>
  );
};

export default ShowMessageModal;
