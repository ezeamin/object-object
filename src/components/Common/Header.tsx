import { getServerSession } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link';

import { authOptions } from '@/utils/authOptions';

import ProfileMenu from './ProfileMenu';

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
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        {isLoggedIn && session.user?.image && session.user?.name ? (
          <div className="dropdown dropdown-end">
            <button type="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image
                  src={session.user?.image}
                  alt={session.user?.name}
                  width={50}
                  height={50}
                />
              </div>
            </button>

            <ProfileMenu />
          </div>
        ) : (
          <Link href="/api/auth/signin" title="Login" className="btn btn-ghost">
            <i className="fa-solid fa-right-to-bracket" />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
