import { MutableRefObject, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { usePostsData } from "../data";

const PostForm = () => {
  const navigate = useNavigate();

  // 입력박스 참조
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const textAreaRef = useRef() as MutableRefObject<HTMLTextAreaElement>;

  // 상태값(데이터) 변경
  const { postsData, mutatePostsData } = usePostsData();

  const handleSave = () => {
    // 검증
    // 서버 연동

    // 상태값(데이터) 변경
    mutatePostsData([
      {
        id: postsData.length + 1,
        title: inputRef.current.value,
        content: textAreaRef.current.value,
      },
      ...postsData,
    ]);

    // 페이지 이동
    navigate("/post");
  };

  return (
    <div>
      <h3>Post Form</h3>
      <div>
        <input
          type="text"
          placeholder="제목"
          style={{
            width: "30em",
            border: "2px solid #aaa",
          }}
          ref={inputRef}
        />
      </div>
      <div>
        <textarea
          style={{ width: "30em", height: "10em" }}
          placeholder="content"
          ref={textAreaRef}></textarea>
      </div>
      <div>
        {/* <input type="file" placeholder="image" accept="image/*" /> */}
      </div>
      <button onClick={handleSave}>save</button>
    </div>
  );
};

export default PostForm;
