import { mockedPosts } from '@/mock';

import PostsGrid from '@/components/Main/PostsGrid';

const Home = () => {
  return (
    <section className="py-5 responsive-paddings">
      <PostsGrid posts={mockedPosts} />
    </section>
  );
};

export default Home;
