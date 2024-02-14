import Admin from "../Layouts/Admin";
import DynamicStateForm from "../components/DynamicStateForm";

const AddState = () => {
  return (
    <Admin>
      <div className="bg-indigo-300 text-white text-center py-2 flex justify-between ">
        <p className="text-xl font-semibold ml-4">Mentaura</p>
        <p className="mr-4"> Admin Panel | Screening Test</p>
      </div>
      <main>
        <div className="container mx-auto py-6">
          <h1 className="text-2xl">Add States</h1>
          <DynamicStateForm />
        </div>
      </main>
    </Admin>
  );
};

export default AddState;
