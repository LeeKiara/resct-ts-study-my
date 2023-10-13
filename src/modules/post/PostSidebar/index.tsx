import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

// /contacts -> Layout - ContactSidebar
// /contacts/form -> Layout - ContactSidebar - ContactForm(Outlet)
const PostSidebar = () => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <aside style={{ width: '200px' }}>
        <h2>Post</h2>
        <ul>
          <li>
            <Link to="/post/form">Form</Link>
          </li>
          <li>
            <Link to="/post">List</Link>
          </li>
        </ul>
      </aside>
      <section>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </section>
    </div>
  );
};

export default PostSidebar;
