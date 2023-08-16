import { useState } from "react";

const DynamicForm = () => {
  const [questions, setQuestions] = useState([
    {
      statement: "",
      options: [{ text: "" }],
    },
  ]);

  const addQuestion = (e) => {
    e.preventDefault();
    setQuestions((prevQuestions) => [
      ...prevQuestions,
      {
        statement: "",
        options: [{ text: "" }],
      },
    ]);
  };

  const addOption = (e, questionIndex) => {
    e.preventDefault();
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[questionIndex].options.push({
        text: "",
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
      updatedQuestions[questionIndex].options[optionIndex].text = value;
      return updatedQuestions;
    });
  };

  return (
    <form className="bg-white shadow p-6 w-full flex flex-col gap-3">
      {questions.map((question, questionIndex) => (
        <div key={questionIndex} className="flex flex-col gap-1">
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
              <>
                <label htmlFor={`option-${optionIndex}`}>
                  Option {optionIndex + 1}
                </label>
                <input
                  key={optionIndex}
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg mb-1"
                  value={option.text}
                  onChange={(event) =>
                    handleOptionChange(event, questionIndex, optionIndex)
                  }
                  placeholder={`Option ${optionIndex + 1}`}
                />
              </>
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
    </form>
  );
};

export default DynamicForm;
