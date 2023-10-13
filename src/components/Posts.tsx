import { MutableRefObject, useRef, useState } from "react";
import PostModifyModal from "./PostModifyModal";

interface PostItem {
  title: string;
  content: string;
  creatorName: string;
}

const handleButtonClick = () => {};

const Posts = () => {
  // Post 목록 상태
  const [postList, setPostList] = useState<PostItem[]>([]);

  // 수정 모달창 상태
  const [showModifyModal, setShowModifyModal] = useState(false);

  // 수정 데이터 상태
  const [modifyItem, setModifyItem] = useState({
    index: 0,
    title: "",
    content: "",
  });

  // 입력박스 참조
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const textAreaRef = useRef() as MutableRefObject<HTMLTextAreaElement>;

  // Post 추가버튼 이벤트 핸들러
  // setPostList함수 실행 : 입력값을 postList 배열로 생성
  const handleAddPost = () => {
    const input = inputRef.current;
    const textarea = textAreaRef.current;

    console.log("input,textarea");
    console.log(input.value + "," + textarea.value);

    // 상태변경 함수(상태변경은 항상 함수로 처리해야 함)
    // 매개변수 : 기존 상태와 다른 참조를 매개변수로 넣어야 함 => setPostList(PostItem[])
    // 매개변수 : 입력값의 배열을 새로운 배열(postList)로 생성
    setPostList([
      {
        title: input.value,
        content: textarea.value,
        creatorName: "LeeHyunMee",
      },
      ...postList,
    ]);
  };

  // 모달창을 열고 선택한 항목의 데이터를 모달로 넘겨주기
  const handleOpenModifyModal = (index: number) => {
    // 모달 열기
    setShowModifyModal(true);
    // 수정할 데이터 modifyItem에 저장
    // modifyItem = setModifyItem (index: 0, title: "", content: "",)
    setModifyItem({
      index,
      title: postList[index].title,
      content: postList[index].content,
    });
  };

  // 수정후 확인 버튼
  const handleModifyModalConfirm = ({
    index,
    title,
    content,
    creatorName,
  }: {
    index: number;
    title: string;
    content: string;
    creatorName: string;
  }) => {
    console.log("---- 1.부모창 수정버튼 -----");
    setPostList(
      postList.map((item, idx) => {
        if (index === idx) {
          // 메모를 수정
          return { index, title, content, creatorName };
        }
        return item;
      })
    );
    setShowModifyModal(false);
  };

  const handleModifyModalCancel = () => {
    setShowModifyModal(false);
  };

  const handleRemove = (index: number) => {
    // postList 배열에서 index와 일치하지 않는 요소들로 이루어진 새 배열을 반환
    // _는 인자 이름으로, 여기서는 사용되지 않는 값을 나타냄
    setPostList(postList.filter((_, idx) => idx !== index));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="제목"
          style={{
            width: "30em",
            border: "2px solid #aaa",
            // border-radius: "4px",
            // margin: "8px 0",
            // outline: "none",
            // padding: "8px","
            // box-sizing: border-box,
            // transition: 0.3s,
          }}
          ref={inputRef}
        />
      </div>
      <div>
        <textarea
          style={{ width: "30em", height: "10em" }}
          placeholder="content"
          ref={textAreaRef}
        ></textarea>
      </div>
      <div>
        <input type="file" placeholder="image" accept="image/*" />
      </div>
      <button onClick={handleAddPost}>게시</button>

      {postList.length === 0 && <p>목록이 없습니다.</p>}
      {postList.length > 0 && (
        <div
          style={{
            border: "1px solid black",
            marginTop: "10px",
            width: "300px",
          }}
        >
          {postList.map((item, index) => (
            <div key={index}>
              <em>{item.creatorName}</em>
              <hr />
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <hr />
              <small>createdTime</small>
              <div>
                <button
                  onClick={() => {
                    handleOpenModifyModal(index);
                  }}
                >
                  수정
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // 이벤트 버블링 중단
                    handleRemove(index);
                  }}
                >
                  삭제
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showModifyModal && (
        <PostModifyModal
          index={modifyItem.index}
          title={modifyItem.title}
          content={modifyItem.content}
          onConfirm={handleModifyModalConfirm}
          onCancel={handleModifyModalCancel}
        />
      )}
    </div>
  );
};

export default Posts;
