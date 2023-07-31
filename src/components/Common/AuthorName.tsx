import Image from 'next/image';

import { User } from '@/interface';

interface Props {
  author: User;
  className?: string;
  textClassName?: string;
  size?: 'small' | 'large';
  children?: React.ReactNode;
}

const AuthorName = (props: Props) => {
  const {
    author,
    className = '',
    textClassName,
    size = 'small',
    children,
  } = props;

  return (
    <div className={`flex gap-2 ${className}`}>
      <figure>
        <Image
          src={author.avatarUrl}
          alt={author.name}
          width={size === 'small' ? 20 : 40}
          height={size === 'small' ? 20 : 40}
          className="rounded-full"
          priority
        />
      </figure>
      <div>
        <p className={textClassName}>{author.name}</p>
        {children}
      </div>
    </div>
  );
};
export default AuthorName;
