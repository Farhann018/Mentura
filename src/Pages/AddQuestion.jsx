import { useState } from "react";
import Admin from "../Layouts/Admin";
import DynamicForm from "../components/DynamicQuestionForm";

const AddQuestion = () => {
  const [questions, setQuestions] = useState({
    0: {
      statement: "",
      options: [
        {
          statement: "",
        },
      ],
    },
  });
  return (
    <Admin>
      <div className="bg-indigo-300 text-white text-center py-2 flex justify-between ">
        <p className="text-xl font-semibold ml-4">Mentaura</p>
        <p className="mr-4"> Admin Panel | Screening Test</p>
      </div>
      <main>
        <div className="container mx-auto py-6">
          <h1 className="text-2xl">Add Questions</h1>
          <DynamicForm />
        </div>
      </main>
      {/* <div className="container mx-auto p-8">
        <h1 className="text-1xl font-semibold mb-4">
          Kindly Add The Question Here :{" "}
        </h1>

        <div id="questions-container">
          <div className="bg-white rounded-lg shadow p-6 mb-4">
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Question #1:</label>
              <div className="flex items-center mb-2">
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg mb-1"
                  placeholder="Enter your question..."
                />
                <button
                  type="button"
                  className="bg-blue-500 hover:bg-yellow-200 text-white px-8 py-2 rounded-lg ml-2"
                  onClick="editQuestion(this)"
                >
                  Edit
                </button>
              </div>
            </div>

            <label className="block mb-2 font-semibold">Options:</label>
            <div className="mb-4 options-container">
              <div className="flex items-center mb-2">
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg mb-1"
                  placeholder="Option 1"
                />
                <button
                  type="button"
                  className="bg-red-500 text-white px-4 py-2 rounded-lg ml-2"
                  onClick="removeOption(this)"
                >
                  Remove
                </button>
              </div>
            </div>
            <button
              type="button"
              className="bg-blue-500 hover:bg-yellow-300 text-white px-4 py-2 rounded-lg"
              onClick="addOption(this)"
            >
              Add Option
            </button>

            <button
              type="button"
              className="bg-blue-300 hover:bg-green-300 text-white mt-4 px-4 py-2 rounded-lg shadow transition"
              onClick="submitQuestion(this)"
            >
              Submit Question
            </button>
            <button
              type="button"
              className="bg-red-300  hover:bg-red-500 text-white mt-4 px-4 py-2 rounded-lg shadow transition"
              onClick="deleteQuestion(this)"
            >
              Delete Question
            </button>
          </div>
        </div>

        <button
          type="button"
          className="bg-indigo-500 hover:bg-yellow-500 text-white mt-4 px-4 py-2 rounded-lg shadow transition"
          onClick="addQuestion()"
        >
          Add More Question
        </button>
      </div> */}
    </Admin>
  );
};

export default AddQuestion;
