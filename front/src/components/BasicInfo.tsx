import axios from 'axios'
import React from 'react'

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
}

function BasicInfo(inputData: Props) {
  const Create = (event: React.FormEvent) => {
    event.preventDefault();
    const data = inputData.newUser
    console.log(data);
    
    axios
      .post(`http://localhost:3000/user/register`, {
        data
      }).then((res) => {
        location.replace("/")
      }).catch()
  }
  return (

    <section className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <div className="w-full bg-white rounded-lg shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:px-8">
          <div className='space-y-4'>
          
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-cyan-700 md:text-4xl dark:text-white">
              Basic information
            </h1>
            <h2 className="text-base text-center font-semibold leading-tight tracking-tight text-black md:text-lg dark:text-white">
              Enter your birthday and gender
            </h2>
          </div>

          <form className="space-y-4 md:space-y-6 pt-5 pb-5" onSubmit={Create}>
            <div className='grid md:grid-cols-3 gap-5 sm:grid-cols-1'>
              <div>
                <label htmlFor="month" className="sr-only">Month</label>
                <select 
                required
                onChange={(e) => inputData.inputValue("Month", e.target.value)} id="month" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option selected>Month</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
              </div>
              <div>
                <label htmlFor="day" className="sr-only">Day</label>
                <input 
                value={inputData.newUser.Day} onChange={(e) => inputData.inputValue("Day", e.target.value)} type="number" min={1} max={31} name="day" id="day" className="remove-arrow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Day' required />

              </div>
              <div>
                <label htmlFor="year" className="sr-only">Year</label>
                <input value={inputData.newUser.Year} onChange={(e) => inputData.inputValue("Year", e.target.value)} type="number" min={1900} name="year" id="year" className="remove-arrow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Year' required />

              </div>
            </div>


            <div>
              <label htmlFor="gender" className="sr-only">Gender</label>
              <select onChange={(e) => inputData.inputValue("Gender", e.target.value)} id="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Rather Not Say">Rather Not Say</option>
                <option value="Custom">Custom</option>
              </select>
            </div>
            <div className='grid md:grid-cols-4 pb-5 sm:grid-cols-1' >
              <div className=' md:col-span-3'></div>
              <button type="submit" className="w-full text-white bg-cyan-700 hover:bg-cyan-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Next</button>
            </div>
          </form>
        </div>
      </div>
    </section>

  )
}


export default BasicInfo