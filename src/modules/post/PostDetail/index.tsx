import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h3>Post Detail</h3>
      <p>{id}</p>
    </div>
  );
};

export default PostDetail;
