'use client';

import { signOut } from 'next-auth/react';
import Link from 'next/link';

interface Props {
  username: string;
}

const ProfileMenu = (props: Props) => {
  const { username } = props;

  return (
    <ul
      // tabIndex={0}
      className="mt-16 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
    >
      <li>
        <Link href={`/user/${username}`}>Profile</Link>
      </li>
      <li>
        <Link href="/settings">Settings</Link>
      </li>
      <li>
        <button type="button" onClick={() => signOut()}>
          Logout
        </button>
      </li>
    </ul>
  );
};
export default ProfileMenu;
