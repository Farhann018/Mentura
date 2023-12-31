import Admin from "../Layouts/Admin";
import DynamicQuestionForm from "../components/DynamicQuestionForm";

const AddQuestion = () => {
  return (
    <Admin>
      <div className="bg-indigo-300 text-white text-center py-2 flex justify-between ">
        <p className="text-xl font-semibold ml-4">Mentaura</p>
        <p className="mr-4"> Admin Panel | Screening Test</p>
      </div>
      <main>
        <div className="container mx-auto py-6">
          <h1 className="text-2xl">Add Questions</h1>
          <DynamicQuestionForm />
        </div>
      </main>
    </Admin>
  );
};

export default AddQuestion;
