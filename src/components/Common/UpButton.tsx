import Link from 'next/link';

const UpButton = () => {
  return (
    <Link href="#main" className="up-button">
      <i className="fa-solid fa-chevron-up" />
    </Link>
  );
};
export default UpButton;
