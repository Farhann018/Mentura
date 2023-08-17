import Header from "../components/Header";
import Bar from "../components/Bar";
import Footer from "../components/Footer";
import NextPrev from "../components/NextPrev";
import Question from "../components/Question";

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import toast, {Toaster} from "react-hot-toast";

export default function UserDash() {
  const [question, setQuestion] = useState();
    const [option, setOption] = useState();
    const [state, setState] = useState();
    const [questions, setQuestions] = useState([]);

    const navigate = useNavigate();
    const url = import.meta.env.VITE_API_URL;
    useEffect(() => {
        axios.post(url + '/process', {
            option_id: option
        }, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token"),
            }
        })
        .then((response) => {
            setQuestion(response.data.question);
            setQuestions(questions => [...questions, response.data.question]);
        })
        .catch(({response}) => {
            if (response.status === 401) {
                return navigate("/start");
            }
            console.log(response.status, response.data);
        });
    }, []);

    useEffect(() => {
        console.log(questions, hasPrevious());
    }, [questions]);

    const hasPrevious = () => {
        const index = questions.indexOf(question);
        if (index === -1 || index === 0) {
            return false;
        }

        return true;
    }

    const previous = () => {
        const index = questions.indexOf(question);
        if (index === -1 || index === 0) {
            return;
        }

        const _copy = [...questions];
        _copy.pop();
        const q = _copy[_copy.length - 1];
        setQuestions(_copy);
        setQuestion(q);
        setOption(undefined);
    }
    const next = () => {
        if (state) {
            setState(undefined);
            return;
        }
        if (!option) {
            toast.error("Please select an option");
            return;
        }
        axios.post(url + '/process', {
            option_id: option
        }, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token"),
            }
        })
        .then((response) => {
            setOption(undefined);
            setQuestion(response.data.question);
            setQuestions(questions => [...questions, response.data.question]);
            if (response.data.state) {
                setState(response.data.state);
            }
        })
        .catch(({response}) => {
            if (response.status === 401) {
                return navigate("/start");
            }
            console.log(response.status, response.data);
        });
    }
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
                {question && state && 
                  <div className="font-medium text-2xl">You may have {state.statement}, continue to find out</div>
                }
                {question && !state && 
                  <div className="font-medium text-2xl">{question && question.statement}</div>
                }
                {!question && state && 
                  <div className="font-medium text-2xl">You have {state && state.statement}</div>
                }
                </div>
                <div className="mt-10">
                  <div className="flex justify-start space-x-3 items-center flex-wrap">
                    {question && !state && question.options.map((op, idx)  => 
                        <label key={op.id + '-' + idx} onClick={() => setOption(op.id)} htmlFor={op.id} className={(op.id === option ? "scale-110 bg-[#6A6390] text-white " : "") + "flex px-4 py-2 bg-[#FFFFFF] shadow-xl relative items-center justify-center  rounded-xl font-base text-xl text-center  space-x-5 hover:bg-[#6A6390] hover:text-white transition ease-in-out hover:-translate-y-1 hover:cursor-pointer"}>
                            {op.statement}
                        </label>
                    )}
                  </div>
                </div>

              <div className="flex justify-between mt-[9.5rem] space-x-3">
                {hasPrevious() && 
                  <button className="button type1" onClick={previous}>
                    <span className="btn-txt " id="prev" >
                      Back
                    </span>
                  </button>
                }
                {question &&
                  <button className="button type1" id="next" onClick={next}>
                    <span className="btn-txt">Next</span>
                  </button>
                }
              </div>
              </div>
            </div>
            <div>
              <Question className="" />
            </div>
          </div>
        </div>
      </div>

      <Footer className="" />
      <Toaster />
    </section>
  );
}
