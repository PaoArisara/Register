import axios from 'axios'
import React, { useState } from 'react'
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import Swal from 'sweetalert2';

type user = {
    email: string
    password: string
    comfermPassword: string
    Firstname: string
    Lastname: string
    Gender: string
    Month: string
    Day: string
    Year: string
}
type Props = {
    newUser: user
    inputValue: (name: string, value: any) => void
    setStep: React.Dispatch<React.SetStateAction<number>>
}

function Email(inputData: Props) {
    //handle password eye
    const [passwordEye, setPasswordEye] = useState(false)
    const handlePasswordClick = () => {
        setPasswordEye(!passwordEye)
    }
    //handle confirmpassword eye
    const [confirmpasswordEye, setConfirmPasswordEye] = useState(false)
    const handleConfirmPasswordClick = () => {
        setConfirmPasswordEye(!confirmpasswordEye)
    }





    const checkemail = (event: React.FormEvent) => {
        event.preventDefault();
        const password = inputData.newUser.password
        const cpassword = inputData.newUser.comfermPassword
        if (password === cpassword) {
            const email = inputData.newUser.email
            axios
                .post(`http://localhost:3000/user/checkemail`, {
                    email
                }).then((res) => {
                    if (res.data)
                        inputData.setStep((x) => x + 1)
                    else
                        Swal.fire({
                            icon: "error",
                            title: "Please Try Again",
                            text: "Email has already been used",
                        });
                }).catch()
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Please Try Again",
                text: "Your password do not match / Need more character",
            });
        }
    }
    return (
        <section className="w-full bg-white rounded-lg shadow-xl md:mt-0 sm:max-w-lg xl:p-0 ">
            {/* Header */}
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-2xl lg:mb-10 text-center font-extrabold text-cyan-700 md:text-5xl">
                    VANNESSPLUS
                </h1>
                <h1 className='text-xl md:text-3xl font-extrabold text-center'>
                    Create your account
                </h1>
                {/* Sign in / Sign up */}
                <div className='flex justify-center'>
                    <div className='flex bg-gray-200 w-80 rounded-2xl lg:text-lg text-center font-semibold lg:mb-4'>
                        <div className='w-1/2 p-1 '>
                            <a href='/signin'>
                                <button className='bg-gray-200 p-2 lg:p-3 w-full rounded-xl text-gray-400 hover:text-black'>
                                    <div>Sign In</div>
                                </button>
                            </a>
                        </div>
                        <div className='w-1/2 pt-1 pr-1'>
                            <a href="/signup">
                                <button className=' bg-white  p-2 lg:p-3 w-full rounded-xl '>
                                    <div>Sign Up</div>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Form */}
                <form className="space-y-4 md:space-y-6" onSubmit={checkemail}>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input value={inputData.newUser.email} onChange={(e) => inputData.inputValue("email", e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                    </div>
                    {/* password section */}
                    <div >
                        <label htmlFor="password" className="pb-2 block text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <div className=' relative'>
                            <input value={inputData.newUser.password} onChange={(e) => inputData.inputValue("password", e.target.value)} type={(passwordEye == false) ? 'password' : 'text'} name="password" id="password" placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            <p className='text-xs text-gray-400 pt-1'>More than 8 character</p>
                            {/* eye section */}
                            <div className='text-xl absolute top-3 right-5'>
                                {
                                    (passwordEye == false) ? <AiFillEyeInvisible onClick={handlePasswordClick} /> : <AiFillEye onClick={handlePasswordClick} />
                                }
                            </div>
                        </div>
                    </div>
                    {/* confirm password  section */}
                    <div>
                        <label htmlFor="password" className="pb-2 block text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                        <div className=' relative'>
                            <input value={inputData.newUser.comfermPassword} onChange={(e) => inputData.inputValue("comfermPassword", e.target.value)} type={(confirmpasswordEye == false) ? 'password' : 'text'} name="confirmpassword" id="confirmpassword" placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            {/* eye section */}
                            <div className='text-xl absolute top-3 right-5'>
                                {
                                    
                                    (passwordEye == false) ? <AiFillEyeInvisible onClick={handleConfirmPasswordClick} /> : <AiFillEye onClick={handleConfirmPasswordClick} />
                                }
                            </div>
                        </div>
                    </div>

                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Already a member? <a href="/SignIn" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</a>
                    </p>
                    <div className='grid grid-cols-4' >
                        <div className=' col-span-3'></div>
                        <button type="submit" className="w-full text-white bg-cyan-700 hover:bg-cyan-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Next</button>
                    </div>

                </form>
            </div>
        </section>


    )
}

export default Email