import { Route, Routes } from "react-router-dom";
import AddQuestion from "./Pages/AddQuestion";
import AddState from "./Pages/AddState";

const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/question/add" element={<AddQuestion />} />
      <Route path="/states/add" element={<AddState />} />
    </Routes>
  );
};

export default AdminRouter;
