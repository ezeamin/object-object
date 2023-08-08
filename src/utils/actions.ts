'use server';

import { v2 as cloudinary } from 'cloudinary';

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadImage = async (imagePath: string) => {
  try {
    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
      transformation: [{ width: 1000, height: 752, crop: 'scale' }],
    };

    const result = await cloudinary.uploader.upload(imagePath, options);
    return result.json();
  } catch (error) {
    return error;
  }
};

// export const createNewProject = async (
//   form: ProjectForm ,
//   creatorId: string,
//   token: string
// ) => {
// const imageUrl = await uploadImage(form.image);
//   if (imageUrl.url) {
//     client.setHeader('Authorization', `Bearer ${token}`);
//     const variables = {
//       input: {
//         ...form,
//         image: imageUrl.url,
//         createdBy: {
//           link: creatorId,
//         },
//       },
//     };
//     return makeGraphQLRequest(createProjectMutation, variables);
//   }
// };

export const fetchToken = async () => {
  const response = await fetch(`${serverUrl}/api/auth/token`);
  const data = await response.json();
  return data;
};
