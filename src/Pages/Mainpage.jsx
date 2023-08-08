import Header from "../components/Header";
import Bar from "../components/Bar";
import Footer from "../components/Footer";
import NextPrev from "../components/NextPrev";
import Question from "../components/Question";

import { useState } from "react";

export default function UserDash() {
  const [question, setQuestion] = useState(1);
  return (
    <section>
      <div className="relative flex items-center justify-center min-h-screen bg-primary ">
      <Header />
        <div className="flex w-full items-center bg-primary">
          <div className="flex justify-between w-full mx-32">
            <div className="flex flex-col ">
              {/* <Bar question={question} className="" /> */}

              <div className="form w-[52rem] h-[25rem] p-10 mt-20">
                <div className="flex justify-start text-center mb-5">
                  <div className="font-medium text-2xl">
                    How do you like to spend your free time?
                  </div>
                </div>
                <div className="mt-10">
                  <div className="flex justify-start space-x-3 items-center ">
                    <div className="flex px-4 py-2 bg-[#B6ACEE] shadow-xl rounded-xl font-base text-xl text-center items-center space-x-5 hover:bg-[#6A6390] hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer">
                      <div>With Family</div>
                    </div>
                    <div className="flex px-4 py-2 bg-[#B6ACEE] shadow-xl rounded-xl font-base text-xl text-center items-center space-x-5 hover:bg-[#6A6390] hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer">
                      <div>Playing Games</div>
                    </div>
                  </div>
                </div>

                <NextPrev
                  question={question}
                  setQuestion={setQuestion}
                  className=""
                />
              </div>
            </div>
            <div>
              <Question className="" />
            </div>
          </div>
        </div>
      </div>

      <Footer className="" />
    </section>
  );
}
