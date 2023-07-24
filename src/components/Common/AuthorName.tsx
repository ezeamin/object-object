import Image from 'next/image';

import { User } from '@/interface';

interface Props {
  author: User;
  className?: string;
}

const AuthorName = (props: Props) => {
  const { author, className = '' } = props;

  return (
    <div className={`flex gap-2 mb-2 ${className}`}>
      <figure>
        <Image
          src={author.avatarUrl}
          alt={author.name}
          width={20}
          height={20}
          className="rounded-full"
          priority
        />
      </figure>
      <p>{author.name}</p>
    </div>
  );
};
export default AuthorName;
