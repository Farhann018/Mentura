import React, { useState } from 'react';

function Mobview() {
  const [modelOpen, setModelOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModelOpen(!modelOpen)} className="flex">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"/></svg>

      </button>

      {modelOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center px-4 text-center md:items-center sm:block sm:p-0">
            <div onClick={() => setModelOpen(false)} className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-40" aria-hidden="true"></div>

            <div className="inline-block w-full max-w-xl p-8 my-20 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl 2xl:max-w-2xl">
              <div className="flex items-center justify-end space-x-4">
                <button onClick={() => setModelOpen(false)} className="text-gray-600 focus:outline-none hover:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* <form className="mt-5">
                <div>
                  <label htmlFor="user name" className="block text-sm text-gray-700 capitalize dark:text-gray-200">Teammate name</label>
                  <input placeholder="Arthur Melo" type="text" className="block w-full px-3 py-2 mt-2 text-gray-600 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40" />
                </div>

                <div className="mt-4">
                  <label htmlFor="email" className="block text-sm text-gray-700 capitalize dark:text-gray-200">Teammate email</label>
                  <input placeholder="arthurmelo@example.app" type="email" className="block w-full px-3 py-2 mt-2 text-gray-600 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40" />
                </div>
                
                <div className="mt-4">
                  <h1 className="text-xs font-medium text-gray-400 uppercase">Permissions</h1>

                  <div className="mt-4 space-y-5">
                    <div className="flex items-center space-x-3 cursor-pointer">
                      <div className="relative w-10 h-5 transition duration-200 ease-linear rounded-full bg-gray-300">
                        <label className="absolute left-0 w-5 h-5 mb-2 transition duration-100 ease-linear transform bg-white border-2 rounded-full cursor-pointer" />
                        <input type="checkbox" name="show" className="hidden w-full h-full rounded-full appearance-none active:outline-none focus:outline-none"/>
                      </div>

                      <p className="text-gray-500">Can make task</p>
                    </div>

                    <div className="flex items-center space-x-3 cursor-pointer">
                      <div className="relative w-10 h-5 transition duration-200 ease-linear rounded-full bg-gray-300">
                        <label className="absolute left-0 w-5 h-5 mb-2 transition duration-100 ease-linear transform bg-white border-2 rounded-full cursor-pointer" />
                        <input type="checkbox" name="show" className="hidden w-full h-full rounded-full appearance-none active:outline-none focus:outline-none"/>
                      </div>

                      <p className="text-gray-500">Can delete task</p>
                    </div>

                    <div className="flex items-center space-x-3 cursor-pointer">
                      <div className="relative w-10 h-5 transition duration-200 ease-linear rounded-full bg-gray-300">
                        <label className="absolute left-0 w-5 h-5 mb-2 transition duration-100 ease-linear transform bg-white border-2 rounded-full cursor-pointer" />
                        <input type="checkbox" name="show" className="hidden w-full h-full rounded-full appearance-none active:outline-none focus:outline-none"/>
                      </div>

                      <p className="text-gray-500">Can edit task</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end mt-6">
                  <button type="button" className="px-3 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-500 rounded-md dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:bg-indigo-700 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-50">
                    Invite Member
                  </button>
                </div>
              </form> */}
              <div className='flex flex-col justify-center text-white font-medium text-center gap-y-6 mt-8'>
                <div className="p-2 w-full bg-[#5D21D6] opacity-80 rounded-lg text-xl">
                    About us
                </div>
                <div className="p-2 w-full bg-[#5D21D6] opacity-80 rounded-lg text-xl">
                    Our Team
                </div>
                <div className="p-2 w-full bg-[#5D21D6] opacity-80 rounded-lg text-xl">
                    Visit Website
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mobview;
