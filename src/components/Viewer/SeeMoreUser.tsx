import Link from 'next/link';

import SeeMorePostInfo from './SeeMorePostInfo';

import { User } from '@/interface';

interface Props {
  user: User;
  postId: number;
}

const SeeMoreUser = (props: Props) => {
  const { user, postId } = props;

  const posts = user.posts.filter((post) => post.id !== postId).slice(0, 3);

  return (
    <section className="custom-card p-5 stick-to-top hide-borders-card">
      <h3 className="font-bold text-lg">
        See more of{' '}
        <Link
          className="custom-link custom-link-no-underline"
          href={`/user/${user.username}`}
        >
          {user.name}
        </Link>
      </h3>
      <div className="flex flex-col gap-2 mt-2">
        {posts.map((post) => (
          <SeeMorePostInfo key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};
export default SeeMoreUser;
