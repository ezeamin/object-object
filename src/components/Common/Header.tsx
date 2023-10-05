import Link from 'next/link';

const isLoggedIn = false;

const Header = () => {
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
        {isLoggedIn ? (
          <div className="dropdown dropdown-end">
            <button type="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                EA
              </div>
            </button>

            <ul
              // tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/">Profile</Link>
              </li>
              <li>
                <Link href="/">Settings</Link>
              </li>
              <li>
                <Link href="/">Logout</Link>
              </li>
            </ul>
          </div>
        ) : (
          <button title="Login" type="button" className="btn btn-ghost">
            <i className="fa-solid fa-right-to-bracket" />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Header;
