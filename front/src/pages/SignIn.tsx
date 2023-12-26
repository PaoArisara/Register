import axios from 'axios';
import React, { useState } from 'react'
import Swal from 'sweetalert2'

type Props = {}

function SignIn({ }: Props) {
    localStorage.clear();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const login = (event: React.FormEvent) => {
        event.preventDefault();
        axios
            .post(`http://localhost:3000/user/login`, {
                email, password
            }).then((res) => {
                console.log(res.data);
                localStorage.setItem("token", res.data.access_token);
                location.replace("/Information")
            }).catch((err) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            });
    }
    return (
        <div className='h-screen w-screen bg-slate-50 flex items-center justify-center'>
            <section className="h-screen w-3/4">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">

                    <div className="w-full bg-white rounded-lg shadow-xl  md:mt-0 sm:max-w-lg xl:p-0">
                        {/* <a href="#" className="flex items-center justify-center mt-10 text-2xl font-semibold text-gray-900 dark:text-white">
                            <img className="w-20 h-20 mr-2 rounded-full" src="https://scontent.fbkk7-3.fna.fbcdn.net/v/t39.30808-6/299996185_369226378747292_4275719285472520595_n.png?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=pVGHKMsiQP0AX-VbH_O&_nc_oc=AQnjpLfn4feI59RHRsalFo7FdHORwutoX5m_1qz-79esbmM9NFwslvw4_BOhu3cWh3o&_nc_ht=scontent.fbkk7-3.fna&oh=00_AfA4lKP9dcFR6wXOYY9vWvc1R8XPmWKKqs9xIujcKNvmwA&oe=658DE2DD" alt="logo" />
                            Vannessplus
                        </a> */}
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <div className=' space-y-4'>
                                <h1 className="text-2xl lg:mb-10 text-center font-extrabold text-cyan-700 md:text-5xl">
                                    VANNESSPLUS
                                </h1>
                                <h2 className='text-xl md:text-3xl font-extrabold text-center'>Weclome Back</h2>
                                <p className='text-xs text-center'>Weclome Back, Please enter Your  details</p>
                            </div>
                            <div className='flex w-full  justify-center'>
                                <div className='flex bg-gray-200 w-80 rounded-2xl lg:text-lg text-center font-semibold lg:mb-5'>
                                    <div className='w-1/2 p-1 '>
                                        <button className=' bg-white  p-2 lg:p-3 w-full rounded-xl'>
                                            <div>Sign In</div>
                                        </button>
                                    </div>
                                    <div className='w-1/2 pt-1 pr-1'>
                                        <a href="/signup">
                                            <button className=' bg-gray-200 p-2 lg:p-3 w-full rounded-xl text-gray-400 hover:text-black'>
                                                <div>Sign Up</div>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <form className="space-y-4 md:space-y-6" onSubmit={login}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                {/* <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                </div> */}
                                <button type="submit" className="w-full text-white bg-cyan-700 hover:bg-cyan-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign In</button>

                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <a href="/Signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>

            </section>
            <section className='w-2/4 h-screen bg-cyan-700 md:flex items-center justify-center hidden'>
                <a href="#" className="flex items-center justify-center mt-10 text-4xl font-semibold text-white">
                    <img className="w-40 h-40 mr-2 rounded-full" src="https://scontent.fbkk7-3.fna.fbcdn.net/v/t39.30808-6/299996185_369226378747292_4275719285472520595_n.png?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=pVGHKMsiQP0AX-VbH_O&_nc_oc=AQnjpLfn4feI59RHRsalFo7FdHORwutoX5m_1qz-79esbmM9NFwslvw4_BOhu3cWh3o&_nc_ht=scontent.fbkk7-3.fna&oh=00_AfA4lKP9dcFR6wXOYY9vWvc1R8XPmWKKqs9xIujcKNvmwA&oe=658DE2DD" alt="logo" />
                    Vannessplus
                </a>
            </section>
        </div>
    )
}

export default SignIn