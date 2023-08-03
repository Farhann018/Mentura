import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Summary() {
  return (
    <section>
      <Header className="" />
      <div class="h-screen w-full bg-gradient-to-b from-[#71BED0] to-[#FDE7EA] ...">
        <div className="max-w-[100rem] mx-auto py-20">
          <div className="flex justify-between">
            <div className="flex flex-col box w-[30rem] p-8 space-y-5">
              <div className="flex justify-between">
                <div className="font-medium text-lg">Overview</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 20 20"
                  >
                    <g fill="currentColor">
                      <circle cx="5" cy="10" r="2" />
                      <circle cx="10" cy="10" r="2" />
                      <circle cx="15" cy="10" r="2" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="w-full bg-[#D2E1F9] p-3 rounded-2xl ">
                <div className="flex justify-between">
                  <div className="flex items-center text-center space-x-2 font-medium">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
                        />
                      </svg>
                    </div>
                    <div>Issue of self Esteem</div>
                  </div>
                  <div className="py-1 px-5 text-base text-center bg-gray-500 rounded-2xl">
                    1500
                  </div>
                </div>
              </div>
              <div className="w-full bg-[#C3C3C3] p-3 rounded-2xl">
                <div className="flex justify-between">
                  <div className="flex items-center text-center space-x-2 font-medium">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
                        />
                      </svg>
                    </div>
                    <div>Anxiety Problems</div>
                  </div>
                  <div className="py-1 px-5 text-base text-center bg-gray-500 rounded-2xl">
                    1500
                  </div>
                </div>
              </div>
              <div className="w-full bg-[#F7F9D2] p-3 rounded-2xl">
                <div className="flex justify-between">
                  <div className="flex items-center text-center space-x-2 font-medium">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
                        />
                      </svg>
                    </div>
                    <div>Depressive Problems</div>
                  </div>
                  <div className="py-1 px-5 text-base text-center bg-gray-500 rounded-2xl">
                    1500
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col box w-[30rem] p-8 space-y-5">
              <div className="flex justify-between">
                <div className="font-medium text-lg">Top Issues</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 20 20"
                  >
                    <g fill="currentColor">
                      <circle cx="5" cy="10" r="2" />
                      <circle cx="10" cy="10" r="2" />
                      <circle cx="15" cy="10" r="2" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="w-full flex justify-between">
                <div className="p-3 rounded-xl bg-neutral-300 text-base text-center">
                  Self Esteeem
                </div>
                <div className="p-3 rounded-xl bg-neutral-300 text-base text-center">
                  Depressive
                </div>
                <div className="p-3 rounded-xl bg-neutral-300 text-base text-center">
                  Anxiety
                </div>
              </div>
            </div>

            <div className="flex flex-col box w-[30rem] p-8 space-y-5">
              <div className="flex justify-between">
                <div className="font-medium text-lg">Summary</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 20 20"
                  >
                    <g fill="currentColor">
                      <circle cx="5" cy="10" r="2" />
                      <circle cx="10" cy="10" r="2" />
                      <circle cx="15" cy="10" r="2" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="w-full flex overflow-x-auto">
                <div class="">
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase  ">
                      <tr>
                        <th scope="col" class="px-6 py-3">
                          City
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Depressive
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Anxiety
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Self Esteem
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="text-gray-900">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                        >
                          Islamabad
                        </th>
                        <td class="px-6 py-4">20%</td>
                        <td class="px-6 py-4">40%</td>
                        <td class="px-6 py-4">50%</td>
                      </tr>
                      <tr class="text-gray-900">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                        >
                          Islamabad
                        </th>
                        <td class="px-6 py-4">20%</td>
                        <td class="px-6 py-4">40%</td>
                        <td class="px-6 py-4">50%</td>
                      </tr>
                      <tr class="text-gray-900">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                        >
                          Islamabad
                        </th>
                        <td class="px-6 py-4">20%</td>
                        <td class="px-6 py-4">40%</td>
                        <td class="px-6 py-4">50%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-evenly mt-10">
            <div className="box2 w-[15rem] h-auto p-5">
              <div className="flex flex-col space-y-1">
                <div className="flex justify-between">
                  <div>Total Issue</div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 20 20"
                    >
                      <g fill="currentColor">
                        <circle cx="5" cy="10" r="2" />
                        <circle cx="10" cy="10" r="2" />
                        <circle cx="15" cy="10" r="2" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="text-sm font-light">
                    Jan 2/23 - Ongoing
                </div>
                <div className="flex justify-between">
                    <div className="flex items-center text-center text-sm">
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M10 14q-1.25 0-2.125-.875T7 11q0-.55.175-1.038t.525-.887q-.1-.25-.15-.525T7.5 8q0-.95.513-1.688T9.35 5.226q.5-.575 1.175-.9T12 4q.8 0 1.475.325t1.175.9q.825.35 1.338 1.088T16.5 8q0 .275-.05.55t-.15.525q.35.4.525.888T17 11q0 1.25-.875 2.125T14 14h-4Zm-6 8v-2.8q0-.85.438-1.562T5.6 16.55q1.55-.775 3.15-1.163T12 15q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 19.2V22H4Z"/></svg>
                        </div>
                        <div>
                        143,125
                        </div>
                    </div>
                    <div className="p-1 px-2 rounded-xl bg-neutral-400 backdrop-blur-lg text-sm">
                        + 12.5%
                    </div>
                </div>
              </div>
            </div>
            <div className="box2 w-[15rem] h-auto p-5">
              <div className="flex flex-col space-y-1">
                <div className="flex justify-between">
                  <div>Total Issue</div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 20 20"
                    >
                      <g fill="currentColor">
                        <circle cx="5" cy="10" r="2" />
                        <circle cx="10" cy="10" r="2" />
                        <circle cx="15" cy="10" r="2" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="text-sm font-light">
                    Jan 2/23 - Ongoing
                </div>
                <div className="flex justify-between">
                    <div className="flex items-center text-center text-sm">
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M10 14q-1.25 0-2.125-.875T7 11q0-.55.175-1.038t.525-.887q-.1-.25-.15-.525T7.5 8q0-.95.513-1.688T9.35 5.226q.5-.575 1.175-.9T12 4q.8 0 1.475.325t1.175.9q.825.35 1.338 1.088T16.5 8q0 .275-.05.55t-.15.525q.35.4.525.888T17 11q0 1.25-.875 2.125T14 14h-4Zm-6 8v-2.8q0-.85.438-1.562T5.6 16.55q1.55-.775 3.15-1.163T12 15q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 19.2V22H4Z"/></svg>
                        </div>
                        <div>
                        143,125
                        </div>
                    </div>
                    <div className="p-1 px-2 rounded-xl bg-neutral-400 backdrop-blur-lg text-sm">
                        + 12.5%
                    </div>
                </div>
              </div>
            </div>
            <div className="box2 w-[15rem] h-auto p-5">
              <div className="flex flex-col space-y-1">
                <div className="flex justify-between">
                  <div>Total Issue</div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 20 20"
                    >
                      <g fill="currentColor">
                        <circle cx="5" cy="10" r="2" />
                        <circle cx="10" cy="10" r="2" />
                        <circle cx="15" cy="10" r="2" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="text-sm font-light">
                    Jan 2/23 - Ongoing
                </div>
                <div className="flex justify-between">
                    <div className="flex items-center text-center text-sm">
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M10 14q-1.25 0-2.125-.875T7 11q0-.55.175-1.038t.525-.887q-.1-.25-.15-.525T7.5 8q0-.95.513-1.688T9.35 5.226q.5-.575 1.175-.9T12 4q.8 0 1.475.325t1.175.9q.825.35 1.338 1.088T16.5 8q0 .275-.05.55t-.15.525q.35.4.525.888T17 11q0 1.25-.875 2.125T14 14h-4Zm-6 8v-2.8q0-.85.438-1.562T5.6 16.55q1.55-.775 3.15-1.163T12 15q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 19.2V22H4Z"/></svg>
                        </div>
                        <div>
                        143,125
                        </div>
                    </div>
                    <div className="p-1 px-2 rounded-xl bg-neutral-400 backdrop-blur-lg text-sm">
                        + 12.5%
                    </div>
                </div>
              </div>
            </div>
            <div className="box2 w-[15rem] h-auto p-5">
              <div className="flex flex-col space-y-1">
                <div className="flex justify-between">
                  <div>Total Issue</div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 20 20"
                    >
                      <g fill="currentColor">
                        <circle cx="5" cy="10" r="2" />
                        <circle cx="10" cy="10" r="2" />
                        <circle cx="15" cy="10" r="2" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="text-sm font-light">
                    Jan 2/23 - Ongoing
                </div>
                <div className="flex justify-between">
                    <div className="flex items-center text-center text-sm">
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M10 14q-1.25 0-2.125-.875T7 11q0-.55.175-1.038t.525-.887q-.1-.25-.15-.525T7.5 8q0-.95.513-1.688T9.35 5.226q.5-.575 1.175-.9T12 4q.8 0 1.475.325t1.175.9q.825.35 1.338 1.088T16.5 8q0 .275-.05.55t-.15.525q.35.4.525.888T17 11q0 1.25-.875 2.125T14 14h-4Zm-6 8v-2.8q0-.85.438-1.562T5.6 16.55q1.55-.775 3.15-1.163T12 15q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 19.2V22H4Z"/></svg>
                        </div>
                        <div>
                        143,125
                        </div>
                    </div>
                    <div className="p-1 px-2 rounded-xl bg-neutral-400 backdrop-blur-lg text-sm">
                        + 12.5%
                    </div>
                </div>
              </div>
            </div><div className="box2 w-[15rem] h-auto p-5">
              <div className="flex flex-col space-y-1">
                <div className="flex justify-between">
                  <div>Total Issue</div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 20 20"
                    >
                      <g fill="currentColor">
                        <circle cx="5" cy="10" r="2" />
                        <circle cx="10" cy="10" r="2" />
                        <circle cx="15" cy="10" r="2" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="text-sm font-light">
                    Jan 2/23 - Ongoing
                </div>
                <div className="flex justify-between">
                    <div className="flex items-center text-center text-sm">
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M10 14q-1.25 0-2.125-.875T7 11q0-.55.175-1.038t.525-.887q-.1-.25-.15-.525T7.5 8q0-.95.513-1.688T9.35 5.226q.5-.575 1.175-.9T12 4q.8 0 1.475.325t1.175.9q.825.35 1.338 1.088T16.5 8q0 .275-.05.55t-.15.525q.35.4.525.888T17 11q0 1.25-.875 2.125T14 14h-4Zm-6 8v-2.8q0-.85.438-1.562T5.6 16.55q1.55-.775 3.15-1.163T12 15q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 19.2V22H4Z"/></svg>
                        </div>
                        <div>
                        143,125
                        </div>
                    </div>
                    <div className="p-1 px-2 rounded-xl bg-neutral-400 backdrop-blur-lg text-sm">
                        + 12.5%
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F8E5E9]">
        <Footer className="" />
      </div>
    </section>
  );
}
