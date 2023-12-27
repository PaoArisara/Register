import React from 'react'
import Name from '../components/Name'
import BasicInfo from '../components/BasicInfo'
import Email from '../components/Email'




function Home() {
    return (
        <div className='h-screen w-screen bg-slate-50 flex justify-center '>
            <section className="h-screen w-3/4 flex items-center">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
                    {/* <Email /> */}
                    {/* <Name/> */}
                    {/* <BasicInfo /> */}
                  
                </div>
            </section>
            <section className='w-2/4  bg-cyan-700 md:flex items-center justify-center hidden'>
                <a href="#" className="flex items-center justify-center mt-10 text-4xl font-semibold text-white">
                    <img className="w-40 h-40 mr-2 rounded-full" src="https://scontent.fbkk7-3.fna.fbcdn.net/v/t39.30808-6/299996185_369226378747292_4275719285472520595_n.png?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=pVGHKMsiQP0AX-VbH_O&_nc_oc=AQnjpLfn4feI59RHRsalFo7FdHORwutoX5m_1qz-79esbmM9NFwslvw4_BOhu3cWh3o&_nc_ht=scontent.fbkk7-3.fna&oh=00_AfA4lKP9dcFR6wXOYY9vWvc1R8XPmWKKqs9xIujcKNvmwA&oe=658DE2DD" alt="logo" />
                    Vannessplus
                </a>
            </section>
        </div>
    )
}

export default Home
