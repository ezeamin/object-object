import PostCard from './PostCard';

import { Post } from '@/interface';

interface Props {
  posts: Post[];
}

const PostsGrid = (props: Props) => {
  const { posts } = props;

  return (
    <section className="posts-grid grid grid-cols-1 md:grid-cols-2 gap-4">
      {posts.map((post, index) => (
        <PostCard key={post.id} post={post} index={index} />
      ))}
    </section>
  );
};
export default PostsGrid;
