// import { getServerSession } from 'next-auth';
// import { useSession } from 'next-auth/react';
// import { useRouter, redirect } from 'next/navigation';

// import { authOptions } from '@/utils/authOptions';

// export const protectedRoute = async (type: 'server' | 'client') => {
//   if (type === 'client' && typeof window !== 'undefined') {
//     const session = useSession();
//     const router = useRouter();
//     if (!session) router.push('/api/auth/signin');
//   } else {
//     const session = await getServerSession(authOptions);
//     if (!session) redirect('/api/auth/signin');
//   }
// };
