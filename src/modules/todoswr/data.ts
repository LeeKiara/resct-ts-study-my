import axios from "axios";
import useSWR from "swr";

const todoApi = axios.create({
  baseURL: "http://localhost:9090",
});

interface TodoData {
  id?: number;
  memo: string;
}

const INIT_DATA: TodoData[] = [];
const TODO_DATA_KEY = "/todos";
// const TODO_DATA_KEY = "@data/todos";

// 데이터를 가져오는 함수(서버, 로컬스토리지, 캐시, webSQL)
const todoFetcher = async ([key, page]) => {
  console.group("-- call fetcher --");

  try {
    const response = await todoApi.get<TodoData[]>(key);

    console.log("<<<todoFetcher>>>");
    console.log(todoFetcher);

    return response.data;
  } catch (e: any) {}
};

export const useTotoData = (page: number) => {
  console.log("-- call useTotoData --");

  // const {} = useSWR<>();
  const {
    data: todoData,
    mutate,
    isValidating: isTodoDataValidating,
  } = useSWR<TodoData[]>([TODO_DATA_KEY, page], todoFetcher, {
    fallbackData: INIT_DATA,
    revalidateOnFocus: false,
  });

  function createTodoData(todoData: TodoData) {
    // 배열데이터 변경(mutation)
    // 기존배열에 매개변수로 받은 객체를 추가하고 새로운 배열 반환

    // mutate(변경할데이터) -> 데이터를 변경

    // mutate 함수
    // 데이터를 변경하고 변경된 데이터를 반환
    // mutate((이전데이터) => {... return 변경된데이터})
    mutate(
      async (
        // 데이터 가져오기 이전이고, 최초의 상태변경이면 undefined로 되어있음
        prevData: TodoData[] = [...INIT_DATA],
      ) => {
        // console.log("--contacts-prev-data--");
        console.log(prevData);

        // 기존 데이터로 신규 배열 생성
        let nextData = [...prevData];

        try {
          // ex) 서버연동 fetch post contact -> id
          const response = await todoApi.post(TODO_DATA_KEY, todoData);

          if (response.status === 201) {
            // 배열 앞쪽에 추가
            // 서버에서 추가된 데이터로 상태 변경
            nextData.unshift({
              ...response.data,
            });
          }
        } catch (e: any) {
          console.log(e);
        }

        // // 로컬스토리지에 저장
        // localStorage.setItem(
        //   CONTACTS_DATA_KEY,
        //   JSON.stringify(nextData) // 배열을 저장
        // );

        // 변경된 데이터(상태값)를 반환
        return nextData;
      },
      false,
    );
    //mutate(처리함수, false);
    //mutate 이후에 캐시만 업데이트 하고, fetcher를 처리하지 않음
  }

  return {
    todoData,
    createTodoData,
    isTodoDataValidating,
  };
};
