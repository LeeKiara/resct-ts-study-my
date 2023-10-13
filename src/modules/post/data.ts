import useSWR from "swr";

interface PostData {
  id: number;
  title: string;
  content: string;
}

// useSWR은 SWR (Stale-While-Revalidate) 패턴을 구현한 라이브러리 중 하나로,
// 데이터를 비동기적으로 가져오고 캐시하여 최신 데이터를 효과적으로 관리하는 데 도움을 줍
export const usePostsData = () => {
  const { data: postsData, mutate: mutatePostsData } = useSWR<PostData[]>(
    "@data/posts",
    { fallbackData: [] },
  );

  return { postsData, mutatePostsData };
};
