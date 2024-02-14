import axios from "axios";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const DynamicStateForm = () => {
  const [states, setStates] = useState([
    {
      statement: "",
    },
  ]);

  const addState = (e) => {
    e.preventDefault();
    setStates((prevStates) => [
      ...prevStates,
      {
        statement: "",
      },
    ]);
  };

  const handleStateChange = (event, stateIndex) => {
    const { value } = event.target;
    setStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[stateIndex].statement = value;
      return updatedStates;
    });
  };

  const submit = (e) => {
    e.preventDefault();
    const url = import.meta.env.VITE_API_URL;

    if (states[0].statement.length === 0) {
      return toast.error("State's statement is required");
    }

    axios
      .post(
        url + "/states/bulk",
        { states },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        setStates([
          {
            statement: "",
          },
        ]);
        toast("Added states!");
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
      {states.map((state, stateIndex) => (
        <div key={"state-" + stateIndex} className="flex flex-col gap-1">
          <label htmlFor={`state-${stateIndex}`}>State {stateIndex + 1}</label>
          <input
            id={`state-${stateIndex}`}
            type="text"
            className="w-full px-4 py-2 border rounded-lg mb-1"
            value={state.statement}
            onChange={(event) => handleStateChange(event, stateIndex)}
            placeholder="State Statement"
          />
        </div>
      ))}
      <button
        onClick={addState}
        className="bg-indigo-500 hover:bg-indigo-600 text-white mt-4 px-4 py-2 rounded-lg shadow transition-colors w-fit"
      >
        Add State
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

export default DynamicStateForm;
