import { useEffect, useState } from "react";
import Admin from "../Layouts/Admin";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

const LinkOptions = () => {
  const [questions, setQuestions] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const url = import.meta.env.VITE_API_URL;
  // TODO: Update local array after updating options
  useEffect(() => {
    console.log(options);
  }, [options]);
  useEffect(() => {
    const id = toast.loading("Loading questions");
    axios
      .get(url + "/questions")
      .then((response) => {
        toast.success("Loaded questions", {
          id,
        });

        setQuestions(response.data.questions);
      })
      .catch(() => {
        toast.error("Could not load questions", {
          id,
        });
      });
  }, []);

  useEffect(() => {
    const id = toast.loading("Loading states");
    axios
      .get(url + "/states")
      .then((response) => {
        toast.success("Loaded states", {
          id,
        });

        setStates(response.data.states);
      })
      .catch(() => {
        toast.error("Could not load states", {
          id,
        });
      });
  }, []);

  useEffect(() => loadSelectedQuestion(), [selectedQuestion]);

  const loadSelectedQuestion = () => {
    if (!selectedQuestion) {
      setOptions([]);
      return;
    }
    const question = questions.find((q) => q.id == selectedQuestion);
    if (!question) {
      setOptions([]);
      return;
    }

    setOptions(question.options);
  };

  const updateOptionQuestion = (optionId, questionId) => {
    const toastId = toast.loading("Updating option");
    axios
      .post(
        `${url}/options/${optionId}/next_question`,
        {
          question_id: questionId,
          _method: "PUT",
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        toast.success("Updated option", {
          id: toastId,
        });
      })
      .catch(({ response }) => {
        if (response.status === 422) {
          toast.error(response.data.message, {
            id: toastId,
          });
          return;
        }
        toast.error("Failed to update option", {
          id: toastId,
        });
      });
  };

  const updateOptionState = (optionId, stateId) => {
    const toastId = toast.loading("Updating option");
    axios
      .post(
        `${url}/options/${optionId}/state`,
        {
          state_id: stateId,
          _method: "PUT",
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        toast.success("Updated option", {
          id: toastId,
        });
      })
      .catch(({ response }) => {
        if (response.status === 422) {
          toast.error(response.data.message, {
            id: toastId,
          });
          return;
        }
        toast.error("Failed to update option", {
          id: toastId,
        });
      });
  };

  return (
    <Admin>
      <div className="bg-indigo-300 text-white text-center py-2 flex justify-between">
        <p className="text-xl font-semibold ml-4">Mentaura</p>
        <p className="mr-4"> Admin Panel | Screening Test</p>
      </div>
      <main>
        <div className="container mx-auto py-6">
          <h1 className="text-2xl">Link Options</h1>
          <table className="w-full mb-4">
            <thead>
              <tr>
                <th className="w-3/12 px-8 py-2">Question</th>
                <th className="w-2/12 px-2 py-2">Options</th>
                <th className="w-2/12 px-4 py-2">Next Question</th>
                <th className="w-2/12 px-4 py-2">State</th>
              </tr>
            </thead>
            <tbody id="linkage-table-body">
              <tr>
                <td className="border px-8 py-2">
                  <select
                    className="w-full border rounded-lg px-2 py-1"
                    onChange={(e) => setSelectedQuestion(e.target.value)}
                    value={selectedQuestion}
                  >
                    <option value="" disabled>
                      {" "}
                      -- Select a question --
                    </option>
                    {questions.map((question, idx) => {
                      return (
                        <option
                          key={`question-select-${idx}`}
                          value={question.id}
                        >
                          {question.statement}
                        </option>
                      );
                    })}
                  </select>
                </td>
                <td className="border px-2 py-2">
                  {options.map((option, idx) => {
                    return (
                      <div key={`option-${idx}`} className="p-2">
                        {option.statement}
                      </div>
                    );
                  })}
                </td>
                <td className="border px-6 py-2">
                  <div className="flex gap-2 flex-col">
                    {options.map((option, idx) => {
                      return (
                        <select
                          key={`option-${idx}-question-${option.next_question_id}`}
                          className="w-full border rounded-lg px-2 py-1"
                          onChange={(e) => {
                            updateOptionQuestion(option.id, e.target.value);
                          }}
                          defaultValue={option.next_question_id}
                        >
                          <option value="">None</option>
                          {questions.map((question, idx) => {
                            return (
                              <option
                                key={`next-question-${idx}`}
                                value={question.id}
                              >
                                {question.statement}
                              </option>
                            );
                          })}
                        </select>
                      );
                    })}
                  </div>
                </td>
                <td className="border px-6 py-4">
                  <div className="flex gap-2 flex-col">
                    {options.map((option, idx) => {
                      return (
                        <select
                          key={`state-${idx}-state-${option.state_id}`}
                          className="w-full border rounded-lg px-2 py-1"
                          onChange={(e) =>
                            updateOptionState(option.id, e.target.value)
                          }
                          defaultValue={option.state_id}
                        >
                          <option value="">None</option>
                          {states.map((state, idx) => {
                            return (
                              <option key={`state-${idx}`} value={state.id}>
                                {state.statement}
                              </option>
                            );
                          })}
                        </select>
                      );
                    })}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      <Toaster />
    </Admin>
  );
};

export default LinkOptions;
