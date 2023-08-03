import { getServerSession } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link';

import { authOptions } from '@/utils/authOptions';

import ProfileMenu from './ProfileMenu';
import SearchBar from './SearchBar';

const Header = async () => {
  const session = await getServerSession(authOptions);
  const isLoggedIn = !!session?.user?.name;

  return (
    <nav className="navbar bg-base-300/70 backdrop-blur-sm paddings fixed z-50">
      <div className="flex-1">
        <Link
          className="btn btn-ghost normal-case text-xl -ms-2 md:-ms-3"
          href="/"
        >
          [object Object]
        </Link>
      </div>
      <div className="flex-none gap-2">
        <SearchBar />
        <Link
          href={isLoggedIn ? '/create' : '/api/auth/signin'}
          className="btn btn-primary"
          style={{ width: '48px' }}
        >
          <i className="fa-solid fa-plus" />
        </Link>
        {isLoggedIn && session.user?.image && session.user?.name ? (
          <div className="dropdown dropdown-end flex">
            <button type="button" className="btn btn-circle">
              <Image
                src={session.user?.image}
                alt={session.user?.name}
                width={48}
                height={48}
                className="rounded-full"
              />
            </button>

            <ProfileMenu username={session.user.name} />
          </div>
        ) : (
          <Link
            href="/api/auth/signin"
            title="Login"
            className="btn btn-ghost"
            style={{ width: '48px' }}
          >
            <i className="fa-solid fa-right-to-bracket" />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
