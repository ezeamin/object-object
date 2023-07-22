'use client';

interface Props {
  id: number;
}

const SaveButton = (props: Props) => {
  const { id } = props;

  //   TODO: This isn't working because link element gets triggered when clicking
  const handleSave = () => {
    console.log('saved!', id);
  };

  return (
    <button
      type="button"
      className="btn btn-ghost min-h-0 h-auto flex items-center gap-2 py-2 px-2 -ms-2"
      onClick={handleSave}
    >
      <i className="fa-regular fa-bookmark" />
      <p>SAVE</p>
    </button>
  );
};
export default SaveButton;
