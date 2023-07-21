import { mockedPosts } from '@/mock';

import PostsGrid from '@/components/Main/PostsGrid';

const Home = () => {
  return <PostsGrid posts={mockedPosts} />;
};

export default Home;
