import Image from 'next/image';
import Link from 'next/link';

import { User } from '@/interface';

interface Props {
  user: User;
}

const UserCard = (props: Props) => {
  const { user } = props;

  const joinedAt = new Date(user.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <section className="custom-card p-5">
      <Link href={`/user/${user.username}`} className="flex gap-2 items-end">
        <figure>
          <Image
            src={user.avatarUrl}
            alt={user.name}
            width={50}
            height={50}
            className="rounded-avatar"
            priority
          />
        </figure>
        <h3 className="text-2xl font-bold">{user.name}</h3>
      </Link>
      <button className="btn mt-3 btn-primary" type="button">
        Follow
      </button>
      <div>
        <p className="mt-3">{user.description}</p>
        <h6 className="mt-5 font-bold text-sm">LOCATION</h6>
        <p>📍{user.location}</p>
        <h6 className="mt-5 font-bold text-sm">JOINED</h6>
        <p>🕐 {joinedAt}</p>
      </div>
    </section>
  );
};
export default UserCard;
