import { MutableRefObject, useRef } from "react";

interface PostModifyModalProps {
  index: number;
  title: string;
  content: string;
  onConfirm: (payload: {
    index: number;
    title: string;
    content: string;
  }) => void;
  onCancel: () => void;
}

const handleButtonClick = () => {};

const PostModifyModal = ({
  index,
  title,
  content,
  onConfirm,
  onCancel,
}: PostModifyModalProps) => {
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const textareaRef = useRef() as MutableRefObject<HTMLTextAreaElement>;

  const handleConfirm = () => {
    console.log("---- 1.자식창 수정버튼 -----");

    onConfirm({
      index,
      title: inputRef.current.value,
      content: textareaRef.current.value,
    });
  };

  return (
    // <!-- Modal background layer(position: fixed) -->
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 2,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%", // /* 부모요소의 크기의 절반만큼을 오른쪽/아래쪽으로 이동시킴 */
          top: "50%", //  /* 자기 자신 크기의 절반만큼을 왼쪽/위쪽으로 이동시킴 */
          transform: "translateX(-50%) translateY(-50%)",
          backgroundColor: "white",
          width: "500px",
          padding: "2rem",
        }}
      >
        <h3>* NO:</h3>
        <input type="text" defaultValue={title} ref={inputRef} />
        <textarea
          style={{ width: "30em", height: "10em" }}
          defaultValue={content}
          ref={textareaRef}
        ></textarea>
        <div>
          <button onClick={handleConfirm}>확인</button>
          <button onClick={onCancel}>취소</button>
        </div>
      </div>
    </div>
    // <!-- Modal background layer end -->
  );
};

export default PostModifyModal;
