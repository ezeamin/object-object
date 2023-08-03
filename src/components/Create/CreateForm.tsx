/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

const CreateForm = () => {
  return (
    <form>
      <div className="grid grid-cols-12 gap-3 my-5">
        <fieldset className="form-control col-span-12 md:col-span-6">
          <label htmlFor="title" className="text-lg">
            Post title
          </label>
          <input id="title" className="input input-bordered w-full" />
        </fieldset>
        <fieldset className="form-control col-span-12 md:col-span-6">
          <label htmlFor="file" className="text-lg">
            Cover image (optional)
          </label>
          <input
            id="file"
            type="file"
            className="file-input input-bordered w-full"
          />
        </fieldset>
      </div>
    </form>
  );
};

export default CreateForm;
