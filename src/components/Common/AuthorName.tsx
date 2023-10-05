import Image from 'next/image';

import { Author } from '@/interface';

interface Props {
  author: Author;
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
          className="rounded-avatar"
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
