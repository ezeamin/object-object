import Link from 'next/link';

import { Post } from '@/interface';

interface Props {
  post: Post;
}

const SeeMorePostInfo = (props: Props) => {
  const { post } = props;

  return (
    <Link
      href={`/post/${post.slug}`}
      className="border border-gray-500 p-3 rounded-lg hover:border-black hover:text-black dark:hover:border-gray-400 dark:hover:text-gray-300 transition-all duration-100"
    >
      <h4 className="font-bold text-xl">{post.title}</h4>
      <p>
        {post.tags.map((tag) => (
          <span key={tag} className="me-2">
            # {tag.toLowerCase()}
          </span>
        ))}
      </p>
    </Link>
  );
};
export default SeeMorePostInfo;
