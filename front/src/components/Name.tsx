import React from 'react'
type user = {
    email: string
    password: string
    comfermPassword:string
    Firstname: string
    Lastname: string
    Gender: string
    Month: string
    Day: string
    Year: string
}
type Props = {
    newUser:user
    inputValue:(name: string, value: any) => void
    setStep:React.Dispatch<React.SetStateAction<number>>
}
function Name(inputData: Props) {

    return (
        <section className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex items-center justify-center ">
                <div className="w-full bg-white rounded-lg shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-2xl lg:mb-10 text-center font-extrabold text-cyan-700 md:text-3xl">
                            Create a Vannessplus Account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#" onSubmit={()=>inputData.setStep((x)=>x+1)}>
                            <div>
                                <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Firstname</label>
                                <input value={inputData.newUser.Firstname} onChange={(e) => inputData.inputValue("Firstname",e.target.value)} type="text" name="firstname" id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Firstname" required />
                                <p className='text-xs text-gray-400 pt-1'>More than 3 character</p>
                            </div>
                            <div>
                                <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lastname</label>
                                <input value={inputData.newUser.Lastname} onChange={(e) => inputData.inputValue("Lastname",e.target.value)} type="text" name="lastname" id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Lastname" required />
                                <p className='text-xs text-gray-400 pt-1'>More than 3 character</p>
                            </div>

                            <div className='grid grid-cols-4' >
                                <div className=' col-span-3'></div>
                                <button type="submit" className="w-full text-white bg-cyan-700 hover:bg-cyan-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Next</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Name