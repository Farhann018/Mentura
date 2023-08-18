import axios from "axios";
import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const DynamicForm = () => {
  const [questions, setQuestions] = useState([
    {
      statement: "",
      options: [{ statement: "" }],
    },
  ]);

  const addQuestion = (e) => {
    e.preventDefault();
    setQuestions((prevQuestions) => [
      ...prevQuestions,
      {
        statement: "",
        options: [{ statement: "" }],
      },
    ]);
  };

  const addOption = (e, questionIndex) => {
    e.preventDefault();
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[questionIndex].options.push({
        statement: "",
      });
      return updatedQuestions;
    });
  };

  const handleQuestionChange = (event, questionIndex) => {
    const { value } = event.target;
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[questionIndex].statement = value;
      return updatedQuestions;
    });
  };

  const handleOptionChange = (event, questionIndex, optionIndex) => {
    const { value } = event.target;
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[questionIndex].options[optionIndex].statement = value;
      return updatedQuestions;
    });
  };

  const submit = (e) => {
    e.preventDefault();
    const url = import.meta.env.VITE_API_URL;

    if (questions[0].statement.length === 0) {
      return toast.error("Question statement is required");
    }

    axios
      .post(
        url + "/questions/bulk",
        { questions },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        setQuestions([
          {
            statement: "",
            options: [{ statement: "" }],
          },
        ]);
        toast("Added questions!");
      })
      .catch(({ response }) => {
        const { status } = response;
        if (status === 422) {
          for (let key in response.data.errors) {
            for (let error in response.data.errors[key]) {
              toast.error(error);
            }
          }
          return;
        }
        toast("An error occurred");
      });
  };

  return (
    <form
      onSubmit={submit}
      className="bg-white shadow p-6 w-full flex flex-col gap-3"
    >
      {questions.map((question, questionIndex) => (
        <div key={"question-" + questionIndex} className="flex flex-col gap-1">
          <label htmlFor={`question-${questionIndex}`}>
            Question {questionIndex + 1}
          </label>
          <input
            id={`question-${questionIndex}`}
            type="text"
            className="w-full px-4 py-2 border rounded-lg mb-1"
            value={question.statement}
            onChange={(event) => handleQuestionChange(event, questionIndex)}
            placeholder="Question Statement"
          />
          <div className="flex flex-col gap-2">
            {question.options.map((option, optionIndex) => (
              <React.Fragment key={`option-${optionIndex}`}>
                <label htmlFor={`option-${optionIndex}`}>
                  Option {optionIndex + 1}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg mb-1"
                  value={option.statement}
                  onChange={(event) =>
                    handleOptionChange(event, questionIndex, optionIndex)
                  }
                  placeholder={`Option ${optionIndex + 1}`}
                />
              </React.Fragment>
            ))}

            <button
              onClick={(e) => addOption(e, questionIndex)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors  w-fit"
            >
              Add Option
            </button>
          </div>
        </div>
      ))}
      <button
        onClick={addQuestion}
        className="bg-indigo-500 hover:bg-indigo-600 text-white mt-4 px-4 py-2 rounded-lg shadow transition-colors w-fit"
      >
        Add Question
      </button>
      <button
        type="submit"
        className="bg-teal-500 hover:bg-teal-600 text-white mt-4 px-4 py-2 rounded-lg shadow transition-colors w-fit"
      >
        Submit
      </button>
      <Toaster />
    </form>
  );
};

export default DynamicForm;
