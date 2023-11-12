import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../Firebase/FirebaseAuth';


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState('');

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
    return (

 <div>       
   
<div class="bg-gray-100 flex justify-center items-center h-screen mt-10">
    
{/* <div class="w-1/2 h-screen hidden lg:block">
  <img src="https://placehold.co/800x/667fff/ffffff.png?text=Your+Image&font=Montserrat" alt="Placeholder Image" class="object-cover w-full h-full"/>
</div> */}

<div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
  <h1 class="text-2xl font-semibold mb-4">Sign Up</h1>
  <form action="#" method="POST">

  <div class="mb-4">
      <label for="username" class="block text-gray-600">UserName</label>
      <input value={users}  onChange={(e) => setUsers(e.target.value)} type="name" id="username" name="username" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off"/>
    </div>

    <div class="mb-4">
      <label for="email" class="block text-gray-600">Email</label>
      <input   value={email}  onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off"/>
    </div>

    <div class="mb-4">
      <label for="password" class="block text-gray-600">Password</label>
      <input  value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off"/>
    </div>

    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
  
    <div class="mt-6 text-blue-500 ">
    <a href="#" class="hover:underline">Login up Here</a>
  </div>

    <div className='flex gap-5 mt-5'>
    <button onClick={() => createUserWithEmailAndPassword(email, password,users)} type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Sign Up</button>
    <button type="submit" class="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md py-2 px-4 w-full">Reset</button>
    </div>
  </form>

  
</div>
</div>

        </div>
    );
};

export default SignUp;