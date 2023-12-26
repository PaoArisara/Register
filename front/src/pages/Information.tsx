import axios from 'axios'
import React, { useEffect, useState } from 'react'

type Props = {}
type Info = {
  Firstname: string
  Lastname: string
  Gender: string
  Month: string
  Day: string
  Year: string
}
function Information({ }: Props) {
  if (!localStorage.getItem("token"))
    location.replace('/');
  const [data, setData] = useState<Info>()

  useEffect(() => {

    axios({
      method: 'get',
      url: `http://localhost:3000/user/information`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then((res: any) => {
      setData(res.data)
    })

  }, [])

  if (!data)
    return "loading";
  return (
    <div><div className='h-screen w-screen bg-slate-100 flex items-center justify-center'>
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
                <h2 className='text-xl md:text-2xl font-bold text-center'>Weclome Back, {data.Firstname}</h2>
              </div>
              <div className=' space-y-10'>
                <p>Personal Information</p>
                <div className=' grid md:grid-cols-2 gap-5'>
                  <div className=' space-y-3'>
                    <p>First Name</p>
                    <div className=' px-5 py-2 rounded-xl shadow-xl'>
                      <p>{data.Firstname}</p>
                    </div>
                  </div>
                  <div className=' space-y-3'>
                    <p>Last Name</p>
                    <div className=' px-5 py-2 rounded-xl shadow-xl'>
                      <p>{data.Lastname}</p>
                    </div>
                  </div>
                </div>

                <div className=' grid md:grid-cols-2 gap-5'>
                  <div className=' space-y-3'>
                    <p>Gender</p>
                    <div className=' px-5 py-2 rounded-xl shadow-xl'>
                      <p>{data.Gender}</p>
                    </div>
                  </div>
                  <div className=' space-y-3'>
                    <p>Birthday</p>
                    <div className=' px-5 py-2 rounded-xl shadow-xl'>
                      <p>{data.Day} {data.Month} {data.Year}</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="w-full text-white bg-cyan-700 hover:bg-cyan-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={() => { localStorage.clear(); location.replace("/") }}>Logout</button>
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
      {/* <p>Firstname : {data.Firstname}</p>
      <p>Lastname : {data.Lastname}</p>
      <p>Gender : {data.Gender}</p>
      <p>birthday : {data.Day} {data.Month} {data.Year}</p>
      <button className='bg-slate-200' onClick={() => { localStorage.clear(); location.replace("/") }}>logout</button> */}
    </div>
  )
}

export default Information