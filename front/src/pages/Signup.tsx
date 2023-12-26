import React from 'react'
import Email from '../components/Email'
import Name from '../components/Name'
import BasicInfo from '../components/BasicInfo'
import { useEffect, useState } from "react";
type Props = {}
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
function Signup({ }: Props) {
    const [newUser, setNewUser] = useState<user>({
        email: "",
        password: "",
        comfermPassword: "",
        Firstname: "",
        Lastname: "",
        Gender: "",
        Month: "",
        Day: "",
        Year: "",
    })
    const [step, setStep] = useState(0);

    const inputValue = (name: string, value: any) => {
        setNewUser({
            ...newUser,
            [name]: value,
        });
    };
    return (
        <div className=' bg-slate-50 flex items-center justify-center'>
            <section className="h-screen w-3/4">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
                    {
                        step == 0 ? <Email newUser={newUser} inputValue={inputValue} setStep={setStep} /> :
                            step == 1 ? <Name newUser={newUser} inputValue={inputValue} setStep={setStep} /> :
                                <BasicInfo newUser={newUser} inputValue={inputValue} />
                    }
                </div>

            </section>
            <section className='w-2/4 h-screen bg-cyan-700  md:flex items-center justify-center hidden'>
                <a href="#" className="flex items-center justify-center mt-10 text-4xl font-semibold text-white">
                    <img className="w-40 h-40 mr-2 rounded-full" src="https://scontent.fbkk7-3.fna.fbcdn.net/v/t39.30808-6/299996185_369226378747292_4275719285472520595_n.png?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=pVGHKMsiQP0AX-VbH_O&_nc_oc=AQnjpLfn4feI59RHRsalFo7FdHORwutoX5m_1qz-79esbmM9NFwslvw4_BOhu3cWh3o&_nc_ht=scontent.fbkk7-3.fna&oh=00_AfA4lKP9dcFR6wXOYY9vWvc1R8XPmWKKqs9xIujcKNvmwA&oe=658DE2DD" alt="logo" />
                    Vannessplus
                </a>
            </section>
        </div>
    )
}

export default Signup