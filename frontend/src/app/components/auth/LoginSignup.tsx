// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { useMutation } from '@tanstack/react-query';
// import { z } from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';

// const schema = z.object({
//   firstName: z.string().min(2, 'First name must be at least 2 characters'),
//   lastName: z.string().min(2, 'Last name must be at least 2 characters'),
//   email: z.string().email('Invalid email address'),
//   password: z.string().min(6, 'Password must be at least 6 characters'),
// });

// type FormData = z.infer<typeof schema>;

// const LoginSignup = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ // Destructure useForm
//     resolver: zodResolver(schema),
//   });

//   const mutation = useMutation({
//     mutationFn: (data: FormData) => {
//       // Replace this with your actual API call
//       return new Promise((resolve) => {
//         setTimeout(() => {
//           console.log('Form data submitted:', data);
//           resolve(data);
//         }, 1000);
//       });
//     },
//   });

//   const onSubmit = (data: FormData) => {
//     mutation.mutate(data);
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
//       <h2 className="text-2xl font-semibold text-center mb-6">Login / Sign Up</h2>
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//         <div>
//           <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
//           <input
//             {...register('firstName')}
//             type="text"
//             id="firstName"
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//           />
//           {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>}
//         </div>
//         <div>
//           <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
//           <input
//             {...register('lastName')}
//             type="text"
//             id="lastName"
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//           />
//           {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>}
//         </div>
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//           <input
//             {...register('email')}
//             type="email"
//             id="email"
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//           />
//           {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
//         </div>
//         <div>
//           <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//           <input
//             {...register('password')}
//             type="password"
//             id="password"
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//           />
//           {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
//         </div>
//         <div>
//           <button
//             type="submit"
//             className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             disabled={mutation.isPending}
//           >
//             {mutation.isPending ? 'Submitting...' : 'Submit'}
//           </button>
//         </div>
//       </form>
//       {mutation.isSuccess && (
//         <div className="mt-4 p-2 bg-green-100 text-green-700 rounded">
//           Successfully submitted!
//         </div>
//       )}
//       {mutation.isError && (
//         <div className="mt-4 p-2 bg-red-100 text-red-700 rounded">
//           An error occurred. Please try again.
//         </div>
//       )}
//     </div>
//   );
// };

// export default LoginSignup;